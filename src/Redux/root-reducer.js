
import { combineReducers } from "redux";
import directoryReducer from "./Directory/reducer";
import cartReducer from "./Cart/reducer";

const rootReducer = combineReducers({
    directory: directoryReducer,
    cart: cartReducer
});

export default rootReducer;