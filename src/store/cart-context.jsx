import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { commerce } from "../lib/commerce";

const CartContext = React.createContext({
  totalItems: 0,
  addToCart: () => {},
  removeFromCart: () => {},
  emptyCart: () => {},
  btnText: false,
  cart: {},
  updateQuantity: (id, quantity) => {},
  showCart: true,
  products: [],
  isLoading: false,
  fetchProduct: (productId) => {},
  product: {},
  captureCheckout: (id, order) => {},
  error: "",
  order: {},
  refreshCart: () => {},
});

export const CartContextProvider = (props) => {
  const [cart, setCart] = useState({});
  const [btnText, setBtnText] = useState(false);
  const [showCart, setShowCart] = useState(true);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [order, setOrder] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { pathname } = useLocation();

  const fetchProducts = async () => {
    setIsLoading(true);
    const { data } = await commerce.products.list({
      limit: 100,
    });

    setProducts(data);
    setIsLoading(false);
  };

  const fetchProduct = async (productId) => {
    const product = await commerce.products.retrieve(productId);

    setProduct(product);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchCartHandler = async () => {
    const response = await commerce.cart.retrieve();

    setCart(response);
  };

  const addToCartHandler = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  const updateQuantityHandler = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });

    setCart(cart);
  };

  const removeFromCartHandler = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  };

  const emptyCartHandler = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  };

  const refreshCartHandler = async () => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  };

  const captureCheckoutHandler = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );

      setOrder(incomingOrder);
      refreshCartHandler();
    } catch (error) {
      setError(error.data.error.message);
    }
  };

  useEffect(() => {
    if (pathname === "/products") {
      setBtnText(true);
    } else {
      setBtnText(false);
    }
  }, [pathname]);

  useEffect(() => {
    if (pathname === "/checkout" || pathname === "/cart") {
      setShowCart(false);
    } else {
      setShowCart(true);
    }
  }, [pathname]);

  useEffect(() => {
    fetchCartHandler();
  }, []);

  const value = {
    addToCart: addToCartHandler,
    totalItems: cart.total_items,
    btnText,
    cart,
    updateQuantity: updateQuantityHandler,
    removeFromCart: removeFromCartHandler,
    emptyCart: emptyCartHandler,
    showCart,
    products,
    isLoading,
    fetchProduct,
    product,
    captureCheckout: captureCheckoutHandler,
    order,
    error,
    refreshCart: refreshCartHandler,
  };

  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
};

export default CartContext;
