import React from "react";
import { Route, Switch } from "react-router-dom"
// components
import Header from "./Components/Header/Header";
import ProductCardCollection from "./Components/Product-Card-Collection/ProductCardCollection";
import CheckoutItem from "./Components/Checkout-Item/CheckoutItem";

import styles from "./app.scss";

const App = () => {
  return (
    <div>
      <Header />
      <section className={styles.homepage}>
        <h1>Products</h1>
        <Switch>
          <Route exact path="/" component={ProductCardCollection} />
          <Route path="/checkout" component={CheckoutItem} />
        </Switch>
      </section>
    </div>
  );
};

export default App;
