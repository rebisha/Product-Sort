import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { array } from "prop-types";

import ProductCard from "../Product-Card/ProductCard";
import Select from "../Select/Select";
import Cart from "../Cart/Cart";
import { selectDirectoryCollections } from "../../Redux/Directory/selector";
import styles from "./productCardCollection.scss";

const sorting = ["Price - Low to High", "Price - High to Low"];

const ProductCardCollection = ({ collection }) => {
  const [selected, setSelected] = useState();
  const [sortProduct, setSortProduct] = useState();
  const [productList, setProductList] = useState(collection);

  const sizes = collection.reduce((arr, ele) => {
    const actualSize = ele.sizes.filter(size => !arr.includes(size));
    return arr.concat(actualSize);
  }, []);

  const handleChange = e => {
    setSelected(e.target.value);
  };

  const handleSort = e => {
    setSortProduct(e.target.value);
    if (e.target.value.indexOf("Low to High") > -1) {
      setProductList(collection.sort((a, b) => a.price - b.price));
    } else if (e.target.value.includes("High to Low")) {
      setProductList(collection.sort((a, b) => b.price - a.price))
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
  ).map(item => {
    return <ProductCard key={item.id} item={item} />;
  });

  const productWithoutFilter = productList.map(item => {
    return <ProductCard key={item.id} item={item} />;
  });

  return (
    <div className={styles.productCollection}>
      <div className={styles.selectorWrapper}>
        <Select sizes={sorting} selectLabel="Order by: " initialValue="" onChange={handleSort} />
        <Select sizes={sizes} selectLabel="Filter by size:" initialValue="All" onChange={handleChange} />
        <Cart />
      </div>

      <Fragment>
        {
          selected && selected.toLowerCase() !== "all" ?
            filterWithSize(productWithFilter) : filterWithSize(productWithoutFilter)
        }
      </Fragment>
    </div>
  );
};

ProductCardCollection.propTypes = {
  collection: array
}

const mapStateToProps = state => ({
  collection: selectDirectoryCollections(state)
});


export default connect(mapStateToProps)(ProductCardCollection);
