import { createSlice, PayloadAction } from '@reduxjs/toolkit';  
import { getTotalResult } from '../../utils/getTotalResult';
import { getCartFromLS } from '../../utils/getCartFromLS';
import { CartItem, CartSliceState } from './types';
// import { getTotalResult } from '../../utils/getTotalResult';



export const initialState: CartSliceState = getCartFromLS();

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<CartItem>) => {
			const findItem = state.items.find((obj) => obj.id === action.payload.id);

			if (findItem) {
				findItem.count++;
			} else {
				state.items.push({ ...action.payload, count: 1 });
			}
			state.totalPrice = getTotalResult(state.items, 'price')
			state.totalCount = getTotalResult(state.items, 'count')
		},
		removeItem: (state, action: PayloadAction<string>) => {
			state.items = state.items.filter((obj) => obj.id !== action.payload);
			state.totalPrice = getTotalResult(state.items, 'price')
			state.totalCount = getTotalResult(state.items, 'count')

		},
		clearItems: (state) => {
			state.items = [];
			state.totalPrice = 0;
			state.totalCount = 0;
		},
		plusItem: (state, action: PayloadAction<string>) => {
			state.items.map((item) => (item.id === action.payload ? item.count++ : item.count));
			state.totalPrice = getTotalResult(state.items, 'price')
			state.totalCount = getTotalResult(state.items, 'count')
		},
		minusItem: (state, action: PayloadAction<string>) => {
			state.items.map((item) => (item.id === action.payload ? item.count-- : item.count));
			state.totalPrice = getTotalResult(state.items, 'price')
			state.totalCount = getTotalResult(state.items, 'count')
		},
	},
});



export const { addItem, removeItem, clearItems, plusItem, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
