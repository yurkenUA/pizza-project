import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { PizzaSliceState, Status } from './types';
import { fetchPizzas } from './asyncActions';


const initialState: PizzaSliceState = { 
	pizzas: [],
	status: Status.CLEAR, 
};


const pizzasSlice = createSlice({
	name: 'pizzas',
	initialState,
	reducers: {
		setItems(state, action) {
			state.pizzas?.push(action.payload);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchPizzas.pending, (state) => {
			state.pizzas = [];
			state.status = Status.LOADING;
		});
		builder.addCase(fetchPizzas.fulfilled, (state, action) => {
			state.pizzas = action.payload;
			state.status = Status.SUCCESS;
		});
		builder.addCase(fetchPizzas.rejected, (state) => {
			state.pizzas = null;
			state.status = Status.ERROR;
		});
	},
});

export const { setItems } = pizzasSlice.actions;

export default pizzasSlice.reducer;
