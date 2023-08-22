import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../features/cart/cartSlice";
import itemsReducer from "../features/items/itemsSlice";

export default configureStore({
    reducer: {
        cart: cartReducer,
        items: itemsReducer,
    },
});
