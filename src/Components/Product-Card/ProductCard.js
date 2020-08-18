import React from "react";
import { object, func } from "prop-types";
import { connect } from "react-redux";
import { addItem } from "../../Redux/Cart/action";

import styles from "./productCard.scss";

const ProductCard = ({ item, addItem }) => {
  const { name, price, image } = item;
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
      <button type="button" className={styles.productCardBtn} onClick={() => addItem(item)}>Add to Cart</button>
    </div>
  );
};

ProductCard.propTypes = {
  item: object,
  addItem: func
};

ProductCard.defaultProps = {
  linkUrl: "shop"
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(ProductCard);
