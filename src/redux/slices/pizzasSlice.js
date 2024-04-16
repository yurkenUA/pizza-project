import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
	pizzas: [],
	status: '',
};

export const fetchPizzas = createAsyncThunk(
	'pizzas/fetchPizzasStatus',
	async ({ categoryName, sortType, searchValue, currentPage }) => {
		const response = await axios.get(
			`https://660f3f19356b87a55c510409.mockapi.io/items?${
				categoryName !== 'All' ? `category=${categoryName}` : ''
			}&sortBy=${sortType.sortProperty}&order=${
				sortType.sortProperty === 'rating' ? 'desc' : 'asc'
			}&title=${searchValue}&page=${currentPage}&limit=8`,
		);
		return response.data;
	},
);

const pizzasSlice = createSlice({
	name: 'pizzas',
	initialState,
	reducers: {
		setItems(state, action) {
			state.pizzas.push(action.payload);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchPizzas.pending, (state) => {
			state.pizzas = [];
			state.status = 'loading';
		});
		builder.addCase(fetchPizzas.fulfilled, (state, action) => {
			state.pizzas = action.payload;
			state.status = 'success';
		});
		builder.addCase(fetchPizzas.rejected, (state) => {
			state.items = null;
			state.status = 'error';
		});
	},
});

export const { setItems } = pizzasSlice.actions;

export default pizzasSlice.reducer;
