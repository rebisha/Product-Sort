import React, { Fragment, useState } from "react";
import PRODUCTS from "./data";
import ProductCard from "../Product-Card/ProductCard";
import Select from "../Select/Select";

import styles from "./productCardCollection.scss";

const ProductCardCollection = () => {
  const [selected, setSelected] = useState();

  const sizes = PRODUCTS.reduce((arr, ele) => {
    const actualSize = ele.sizes.filter((size) => !arr.includes(size));
    return arr.concat(actualSize);
  }, []);

  const productWithFilter = PRODUCTS.filter((item) =>
    item.sizes.includes(selected)
  ).map(({ id, ...productProps }) => {
    return <ProductCard key={id} {...productProps} />;
  });

  const productWithoutFilter = PRODUCTS.map(({ id, ...productProps }) => {
    return <ProductCard key={id} {...productProps} />;
  });

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  const filterWithSize = productToFilter => {
    return (
      <Fragment>
        <h3 className={styles.totalItemCount}>{productToFilter.length}{" items"}</h3>
        <div className={styles.productCollectionWrapper}>{productToFilter}</div>
      </Fragment>
    )
  }

  return (
    <div className={styles.productCollection}>
      <Select sizes={sizes} onChange={handleChange} />
      <Fragment>
        {selected && selected !== "all" ? filterWithSize(productWithFilter) : filterWithSize(productWithoutFilter)}
      </Fragment>
    </div>
  );
};

export default ProductCardCollection;
