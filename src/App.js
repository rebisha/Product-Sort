import React from "react";
// components
import Header from "./Components/Header/Header";
import ProductCardCollection from "./Components/Product-Card-Collection/ProductCardCollection";

import styles from "./app.scss";

const App = () => {
  return (
    <div>
      <Header />
      <div className={styles.homepage}>
        <ProductCardCollection />
      </div>
    </div>
  );
};

export default App;
