import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API } from '../api/api';
import { IProduct } from '../models/Product.model';

export const getProducts = createAsyncThunk('cart/getProducts', async () => {
    const response = await API.getProducts();
    return response;
});

interface ProductState {
    products: IProduct[];
    isLoading: boolean;
    error?: any;
    searchProducts?: IProduct[];
    cart: {
        products: IProduct[];
        amount: number;
    };
}

const initialState: ProductState = {
    products: [],
    isLoading: false,
    cart: {
        products: [],
        amount: 0
    }
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const cart = [...state.cart.products];
            const findIndex = cart.findIndex(
                (item) => item.id === action.payload.id
            );
            if (findIndex) {
                cart.push(action.payload);
            } else {
                cart[findIndex] = action.payload;
            }
            state.cart.products = cart;
            state.cart.amount = state.cart.products.length;
        },
        removeFromCart: (state, action) => {
            state.cart.products = state.cart.products.filter(
                (item) => item.id !== action.payload
            );
            state.cart.amount = state.cart.products.length;
        },
        search: (state, action) => {
            let list = [...state.products];
            list = list.filter((item) => {
                return (
                    item.name
                        .toLowerCase()
                        .indexOf(action.payload.toLowerCase()) !== -1
                );
            });
            state.searchProducts = list;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.isLoading = false;
        });
        builder.addCase(getProducts.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getProducts.rejected, (state, action) => {
            state.error = action.error;
            state.isLoading = false;
        });
    }
});

export const { addToCart, removeFromCart, search } = productSlice.actions;
export default productSlice.reducer;
