import { configureStore } from '@reduxjs/toolkit';
import filters from './filter/slice.ts';
import cart from './cart/slice.ts';
import pizzas from './pizzas/slice.ts';
import { useDispatch } from 'react-redux';

export const store = configureStore({
	reducer: { filters, cart, pizzas },
});
 
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>() // 
