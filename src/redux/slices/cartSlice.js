import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
	totalPrice: 0,
	items: [],
	totalCount: 0,
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (state, action) => {
			const findItem = state.items.find((obj) => obj.id === action.payload.id);

			if (findItem) {
				findItem.count++;
			} else {
				state.items.push({ ...action.payload, count: 1 });
			}
			state.totalPrice = state.items.reduce((sum, cur) => sum + cur.price * cur.count, 0);
			state.totalCount = state.items.reduce((sum, cur) => cur.count + sum, 0);
		},
		removeItem: (state, action) => {
			state.items = state.items.filter((obj) => obj.id !== action.payload);
			state.totalPrice = state.items.reduce((sum, cur) => sum + cur.price * cur.count, 0);
			state.totalCount = state.items.reduce((sum, cur) => cur.count + sum, 0);
		},
		clearItems: (state) => {
			state.items = [];
			state.totalPrice = 0;
			state.totalCount = 0;
		},
		plusItem: (state, action) => {
			state.items.map((item) => (item.id === action.payload ? item.count++ : item.count));
			state.totalPrice = state.items.reduce((sum, cur) => sum + cur.price * cur.count, 0);
			state.totalCount = state.items.reduce((sum, cur) => cur.count + sum, 0);
		},
		minusItem: (state, action) => {
			state.items.map((item) => (item.id === action.payload ? item.count-- : item.count));
			state.totalPrice = state.items.reduce((sum, cur) => sum + cur.price * cur.count, 0);
			state.totalCount = state.items.reduce((sum, cur) => cur.count + sum, 0);
		},
	},
});

export const selectCart = (state) => state.cart;
export const selectCartItemById = (id) => (state) => state.cart.items.find((obj) => obj.id === id);

export const { addItem, removeItem, clearItems, plusItem, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
