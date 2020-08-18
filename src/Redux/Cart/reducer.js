import { cartActionTypes } from "./types";
import { addItemToCart, removeItemFromCart } from "./util";

const INITIAL_STATE = {
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        case cartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            };
        case cartActionTypes.CLEAR_CART_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
            };
        default:
            return state;
    }
}

export default cartReducer;