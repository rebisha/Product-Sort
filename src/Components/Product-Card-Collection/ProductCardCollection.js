import React, { Fragment, useState } from "react";
import PRODUCTS from "./data";
import ProductCard from "../Product-Card/ProductCard";
import Select from "../Select/Select";

import styles from "./productCardCollection.scss";

const sorting = ["Price - Low to High", "Price - High to Low"];

const ProductCardCollection = () => {
  const [selected, setSelected] = useState();
  const [sortProduct, setSortProduct] = useState();
  const [productList, setProductList] = useState(PRODUCTS);

  const sizes = PRODUCTS.reduce((arr, ele) => {
    const actualSize = ele.sizes.filter(size => !arr.includes(size));
    return arr.concat(actualSize);
  }, []);

  const handleChange = e => {
    setSelected(e.target.value);
  };

  const handleSort = e => {
    setSortProduct(e.target.value);
    if (e.target.value.indexOf("Low to High") > -1) {
      setProductList(PRODUCTS.sort((a, b) => a.price - b.price));
    } else if (e.target.value.includes("High to Low")) {
      setProductList(PRODUCTS.sort((a, b) => b.price - a.price))
    }
  }

  const filterWithSize = productToFilter => {
    return (
      <Fragment>
        <h3 className={styles.totalItemCount}>{productToFilter.length}{" items"}</h3>
        <div className={styles.productCollectionWrapper}>{productToFilter}</div>
      </Fragment>
    )
  }

  const productWithFilter = productList.filter(item => {
    return item.sizes.indexOf(selected) > -1;
  }
  ).map(({ id, ...productProps }) => {
    return <ProductCard key={id} {...productProps} />;
  });

  const productWithoutFilter = productList.map(({ id, ...productProps }) => {
    return <ProductCard key={id} {...productProps} />;
  });

  return (
    <div className={styles.productCollection}>
      <div className={styles.selectorWrapper}>
        <Select sizes={sorting} selectLabel="Order by: " initialValue="" onChange={handleSort} />
        <Select sizes={sizes} selectLabel="Filter by size:" initialValue="All" onChange={handleChange} />
      </div>

      <Fragment>
        {
          selected && selected.toLowerCase() !== "all" && sortProduct ?
            filterWithSize(productWithFilter) : filterWithSize(productWithoutFilter)
        }
      </Fragment>
    </div>
  );
};

export default ProductCardCollection;
