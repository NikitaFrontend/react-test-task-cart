import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('products/fetchProductsStatus', async () => {
  const { data } = await axios.get('https://run.mocky.io/v3/59f47e8e-2a09-48c3-8a1d-0af8e5817f7c');
  return JSON.parse(data);
});

const initialState = {
  items: [],
  total: 0,
};

export const productsSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
    clearItem: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
    },
    increase: (state, action) => {
      const cartItem = state.items.find((item) => item.id === action.payload);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, action) => {
      const cartItem = state.items.find((item) => item.id === action.payload);
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: (state) => {
      let total = 0;
      state.items.forEach((item) => {
        total += item.amount * item.price;
      });
      state.total = total;
    },
  },
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      console.log('идет загрузка'); //загрузка
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.items = action.payload; //загрузился
    },
    [fetchProducts.rejected]: (state, action) => {
      console.log('ошибка, перезагрузите страницу'); //ошибка
    },
  },
});

export const { setItems, clearItem, decrease, increase, calculateTotals } = productsSlice.actions;

export default productsSlice.reducer;
