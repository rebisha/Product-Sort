import React from "react";
import { string, number } from "prop-types";
import styles from "./productCard.scss";

const ProductCard = ({ name, price, image }) => {
  return (
    <div className={styles.productCardWrapper}>
      <img
        className={styles.productCardImage}
        src={require(`../../assets/images/${image}`)}
        alt="image"
      />
      <div className={styles.productCardItem}>
        <h3 className={styles.productCardTitle}>{name}</h3>
        <p className={styles.productCardPrice}>${price}</p>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  name: string,
  price: number,
  image: string,
};

export default ProductCard;
