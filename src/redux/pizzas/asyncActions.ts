import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchPizzasArgs, Pizza } from "./types";
import axios from "axios";

export const fetchPizzas = createAsyncThunk<Pizza[], FetchPizzasArgs>(
	'pizzas/fetchPizzasStatus',
	async ({ categoryName, sortType, searchValue, currentPage } ) => {
		const response = await axios.get<Pizza[]>(
			`https://660f3f19356b87a55c510409.mockapi.io/items?${
				categoryName !== 'All' ? `category=${categoryName}` : ''
			}&sortBy=${sortType.sortProperty}&order=${
				sortType.sortProperty === 'rating' ? 'desc' : 'asc'
			}&title=${searchValue}&page=${currentPage}&limit=8`,
		);
		return response.data;
	},
);