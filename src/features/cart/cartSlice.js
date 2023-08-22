import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        totalQuantity: 0,
        totalPrice: 0,
    },
    reducers: {
        itemAdded(state, action) {
            const newItem = action.payload;
            const existingItemIndex = state.cartItems.findIndex(
                (item) => item.id === newItem.id && item.type === newItem.type
            );

            if (existingItemIndex !== -1) {
                state.cartItems[existingItemIndex].quantity += newItem.quantity;
            } else {
                state.cartItems.push(newItem);
            }

            state.totalQuantity += newItem.quantity;
            state.totalPrice += newItem.price * newItem.quantity;
            message.success(`${newItem.name} added to Cart!`);
        },

        itemIncrement(state, action) {
            const { id, type } = action.payload;
            const existingItem = state.cartItems.find(
                (item) => item.id === id && item.type === type
            );

            if (existingItem) {
                existingItem.quantity++;
                state.totalQuantity++;
                state.totalPrice += existingItem.price;

                message.success(`Another ${existingItem.name} added to Cart!`);
            }
        },

        itemDecrement(state, action) {
            const { id, type } = action.payload;
            const existingItem = state.cartItems.find(
                (item) => item.id === id && item.type === type
            );

            if (existingItem && existingItem.quantity > 0) {
                existingItem.quantity--;
                state.totalQuantity--;
                state.totalPrice -= existingItem.price;
                message.success(
                    `Single Unit of ${existingItem.name} removed from Cart!`
                );
            }
        },

        itemRemoved(state, action) {
            const { id, type } = action.payload;
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === id && item.type === type
            );

            if (itemIndex !== -1) {
                const removedItem = state.cartItems[itemIndex];
                state.totalQuantity -= removedItem.quantity;
                state.totalPrice -= removedItem.price * removedItem.quantity;

                state.cartItems.splice(itemIndex, 1);
                message.success(`${removedItem.name} removed from Cart!`);
            }
        },
    },
});

export const { itemAdded, itemIncrement, itemDecrement, itemRemoved } =
    cartSlice.actions;

export default cartSlice.reducer;
