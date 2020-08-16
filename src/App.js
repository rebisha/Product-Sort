import React from "react";
import { Route, Switch } from "react-router-dom"
// components
import Header from "./Components/Header/Header";
import ProductCardCollection from "./Components/Product-Card-Collection/ProductCardCollection";
import ProductPage from "./Pages/Product-Page/ProductPage";

import styles from "./app.scss";

const App = () => {
  return (
    <div>
      <Header />
      <div className={styles.homepage}>
        <h1>Products</h1>
        <Switch>
          <Route exact path="/" component={ProductCardCollection} />
          <Route path="/shop" component={ProductPage} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
