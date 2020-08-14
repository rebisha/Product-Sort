import React from "react";
// components
import ProductCardCollection from "./Components/Product-Card-Collection/ProductCardCollection";

import styles from "./app.scss";

const App = () => {
  return (
    <div className={styles.homepage}>
      <ProductCardCollection />
    </div>
  );
};

export default App;
