import React from "react";
import { withRouter } from "react-router-dom";
import { string, number, object } from "prop-types";

import styles from "./productCard.scss";

const ProductCard = ({ name, price, image, linkUrl, match, history }) => {
  return (
    <div className={styles.productCardWrapper} onClick={() => history.push(`${match.url}${linkUrl}`)}>
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
  linkUrl: string,
  match: object,
  history: object,
};

ProductCard.defaultProps = {
  linkUrl: "shop"
}

export default withRouter(ProductCard);
