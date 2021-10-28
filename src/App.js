import { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/Layouts/Layout";
import ProductDetail from "./components/Products/ProductDetail";
import ScrollToTop from "./Helper/ScrollToTop";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage.jsx";
import ProductsPage from "./pages/ProductsPage";
import { CartContextProvider } from "./store/cart-context";

function App() {
  return (
    <CartContextProvider>
      <Fragment>
        <Layout>
          <ScrollToTop />
          <Switch>
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/products" exact>
              <ProductsPage />
            </Route>
            <Route path="/products/:productId">
              <ProductDetail />
            </Route>
            <Route path="/cart">
              <CartPage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/blog">
              <BlogPage />
            </Route>
            <Route path="/checkout">
              <CheckoutPage />
            </Route>
            <Route path="*">
              <ErrorPage />
            </Route>
          </Switch>
        </Layout>
      </Fragment>
    </CartContextProvider>
  );
}

export default App;
