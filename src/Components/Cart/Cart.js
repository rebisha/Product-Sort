import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { number } from "prop-types";
import { selectCartItemsCount } from "../../Redux/Cart/selectors";

import styles from "./cart.scss";

const Cart = ({ itemCount }) => {
    return (
        <Link to="checkout" className={styles.cartItemCount}> Cart({itemCount})</Link>
    )
}

Cart.propTypes = {
    itemCount: number
}

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps)(Cart);