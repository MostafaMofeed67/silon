import * as yup from "yup";

export const yupSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("Fist name is required *")
    .min(3, "First name must be at least 3 characters")
    .max(15, "First name must be at most 15 characters"),
  lastName: yup
    .string()
    .required("Last name is required *")
    .min(3, "Last name must be at least 3 characters")
    .max(15, "Last name must be at most 15 characters"),
  address1: yup
    .string()
    .required("Address is required *")
    .min(5, "Address must be at least 5 characters")
    .max(12, "Address must be at most 12 characters"),
  city: yup
    .string()
    .required("City is required *")
    .min(4, "City must be at least 4 characters")
    .max(10, "City must be at most 10 characters"),
  zip: yup
    .string()
    .required("ZIP / Postal code is required *")
    .length(5, "Please enter valid ZIP (5 numbers)"),

  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required *"),
});
