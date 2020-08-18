import React from "react";
import { connect } from "react-redux";
import { array, number, func } from "prop-types";
import { selectCartItems, selectCartTotal } from "../../Redux/Cart/selectors";
import { addItem, removeItem, clearCartItem } from "../../Redux/Cart/action";

import styles from "./checkoutItem.scss";

const CheckoutItem = ({ cartItems, cartTotal, addItem, removeItem, clearCartItem }) => {
    return (
        <section className={styles.checkoutItem}>
            {
                cartItems.map(item => {
                    return (
                        <div key={item.id} className={styles.checkoutItemWrapper}>
                            <img
                                className={styles.checkoutItemWrapperImage}
                                src={require(`../../assets/images/${item.image}`)}
                                alt="image"
                            />
                            <div className={styles.checkoutItemWrapperBody}>
                                <h3 className={styles.checkoutItemTitle}>{item.name}</h3>
                                <p className={styles.checkoutItemPrice}>${item.price}</p>
                                <span className={styles.checkoutItemQuantity}>
                                    <div className={styles.arrow} onClick={() => removeItem(item)}>
                                        &#10094;
                                    </div>
                                    <span className={styles.value}>{item.quantity}</span>
                                    <div className={styles.arrow} onClick={() => addItem(item)}>
                                        &#10095;
                                    </div>
                                </span>
                                <div className={styles.arrow} onClick={() => clearCartItem(item)}>
                                    &#10005;
                                </div>
                            </div>
                        </div>
                    );
                })
            }

            <h1 className={styles.cartTotal}>Total: ${cartTotal}</h1>

        </section>
    )
}

CheckoutItem.propTypes = {
    cartItems: array,
    cartTotal: number,
    addItem: func,
    removeItem: func,
    clearCartItem: func
}

const mapStateToProps = state => ({
    cartItems: selectCartItems(state),
    cartTotal: selectCartTotal(state)
});

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)),
    clearCartItem: item => dispatch(clearCartItem(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutItem);