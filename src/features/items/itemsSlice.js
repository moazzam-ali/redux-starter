import { createSlice } from "@reduxjs/toolkit";

import data from "../../data";

const initialState = data;

export const itemsSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        itemAddedToCart(state, action) {
            const { id, type, quantity } = action.payload;
            const itemToUpdate = state[type + "s"].find(
                (item) => item.id === id
            );

            if (itemToUpdate) {
                itemToUpdate.availability -= quantity;
            }
        },

        itemRemovedFromCart(state, action) {
            const { id, type, quantity } = action.payload;
            const itemToUpdate = state[type + "s"].find(
                (item) => item.id === id
            );

            if (itemToUpdate) {
                itemToUpdate.availability += quantity;
            }
        },
    },
});

export const { itemAddedToCart, itemRemovedFromCart } = itemsSlice.actions;

export default itemsSlice.reducer;
