import { createSlice } from "@reduxjs/toolkit";

import data from "../../data";

const initialState = data;

export const itemsSlice = createSlice({
    name: "items",
    initialState,
    reducers: {},
});

// export const {} = itemsSlice.actions;

export default itemsSlice.reducer;
