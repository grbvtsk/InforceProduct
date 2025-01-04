import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {ProductsState} from "../types/ProductsState.interface.ts";
import {Product} from "../types/Product.interface.ts";

const initialState:ProductsState = {
    products: [],
    loading: false
};
const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        }
    },
});

export const { setProducts, setLoading } = productsSlice.actions;

export default productsSlice.reducer;
