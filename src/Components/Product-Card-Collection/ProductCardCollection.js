import React from "react";
import PRODUCTS from "./data";
import ProductCard from "../Product-Card/ProductCard";

import styles from "./productCardCollection.scss";

const ProductCardCollection = () => {
  return (
    <div className={styles.productCollectionWrapper}>
      {PRODUCTS.map(({ id, ...productProps }) => {
        return <ProductCard key={id} {...productProps} />;
      })}
    </div>
  );
};

export default ProductCardCollection;
