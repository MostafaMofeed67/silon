import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { commerce } from "../../lib/commerce";
import FormInput from "./FormInput";

import { yupResolver } from "@hookform/resolvers/yup";
import { yupSchema } from "../../Helper/YupSchema";
import LoadingSpinner from "../../ui/LoadingSpinner";

const AddressForm = ({ checkoutToken, onNext }) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");

  let countries = [];
  for (const key in shippingCountries) {
    countries.push({
      id: key,
      label: shippingCountries[key],
    });
  }

  const subdivisions = Object.entries(shippingSubdivisions).map(
    ([code, name]) => ({ id: code, label: name })
  );

  const options = shippingOptions.map((sO) => ({
    id: sO.id,
    label: `${sO.description} - (${sO.price.formatted_with_symbol})`,
  }));

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );

    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };

  const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countryCode
    );

    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
  };

  const fetchShippingOptions = async (
    checkoutTokenId,
    country,
    region = null
  ) => {
    const options = await commerce.checkout.getShippingOptions(
      checkoutTokenId,
      { country, region }
    );

    setShippingOptions(options);
    setShippingOption(options[0].id);
  };

  useEffect(() => {
    if (checkoutToken) {
      fetchShippingCountries(checkoutToken.id);
    } else {
      return;
    }
  }, [checkoutToken]);

  useEffect(() => {
    if (shippingCountry) {
      fetchSubdivisions(shippingCountry);
    } else {
      return;
    }
  }, [shippingCountry]);

  useEffect(() => {
    if (shippingSubdivision)
      fetchShippingOptions(
        checkoutToken.id,
        shippingCountry,
        shippingSubdivision
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shippingSubdivision]);

  const methods = useForm({
    mode: "onTouched",
    resolver: yupResolver(yupSchema),
  });
  const submitFormHandler = (data) => {
    onNext({
      ...data,
      shippingCountry,
      shippingSubdivision,
      shippingOption,
    });
  };

  if (shippingCountries.length === 0)
    return (
      <div className="text-center">
        <LoadingSpinner />
      </div>
    );

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submitFormHandler)}>
        <div className="grid grid-cols-2 gap-4 mt-6 sm:grid-cols-1">
          <div>
            <FormInput
              name="firstName"
              label="First name"
              errors={methods.formState.errors.firstName}
            />
            <p className="text-xs text-secondary-light mt-2">
              {methods.formState.errors.firstName?.message}
            </p>
          </div>
          <div>
            <FormInput
              name="lastName"
              label="Last name"
              errors={methods.formState.errors.lastName}
            />
            <p className="text-xs text-secondary-light mt-2">
              {methods.formState.errors.lastName?.message}
            </p>
          </div>
          <div>
            <FormInput
              name="address1"
              label="Address"
              errors={methods.formState.errors.address1}
            />
            <p className="text-xs text-secondary-light mt-2">
              {methods.formState.errors.address1?.message}
            </p>
          </div>
          <div>
            <FormInput
              name="email"
              label="Email"
              errors={methods.formState.errors.email}
            />
            <p className="text-xs text-secondary-light mt-2">
              {methods.formState.errors.email?.message}
            </p>
          </div>
          <div>
            <FormInput
              name="city"
              label="City"
              errors={methods.formState.errors.city}
            />
            <p className="text-xs text-secondary-light mt-2">
              {methods.formState.errors.city?.message}
            </p>
          </div>
          <div>
            <FormInput
              name="zip"
              label="ZIP / Postal code"
              errors={methods.formState.errors.zip}
            />
            <p className="text-xs text-secondary-light mt-2">
              {methods.formState.errors.zip?.message}
            </p>
          </div>
          <div className="relative">
            <label>Shipping Countries</label>
            <select
              value={shippingCountry}
              onChange={(e) => setShippingCountry(e.target.value)}
              className="peer h-10 w-full border-b-2 placeholder-transparent border-gray-300 text-gray-900 focus:outline-none focus:border-primary"
            >
              {countries.map((country) => (
                <option
                  key={country.id}
                  value={country.id}
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  {country.label}
                </option>
              ))}
            </select>
          </div>
          <div className="relative">
            <label>Shipping Subdivisions</label>
            <select
              value={shippingSubdivision}
              onChange={(e) => setShippingSubdivision(e.target.value)}
              className="peer h-10 w-full border-b-2 placeholder-transparent border-gray-300 text-gray-900 focus:outline-none focus:border-primary"
            >
              {subdivisions.map((country) => (
                <option
                  key={country.id}
                  value={country.id}
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  {country.label}
                </option>
              ))}
            </select>
          </div>
          <div className="relative">
            <label>Shipping Options</label>
            <select
              value={shippingOption}
              onChange={(e) => setShippingOption(e.target.value)}
              className="peer h-10 w-full border-b-2 placeholder-transparent border-gray-300 text-gray-900 focus:outline-none focus:border-primary"
            >
              {options.map((country) => (
                <option
                  key={country.id}
                  value={country.id}
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  {country.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className=" mt-3 sm:mt-5 flex items-center justify-between">
          <Link
            to="/cart"
            type="button"
            className="border border-gray-300 border-solid py-1.5 px-3 shadow focus:shadow-md text-sm"
          >
            Back to cart
          </Link>
          <button className="btn">Next</button>
        </div>
      </form>
    </FormProvider>
  );
};

export default AddressForm;
