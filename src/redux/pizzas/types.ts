import { ISortType } from "../filter/types";

export type Pizza = {
	id: string;
	imageUrl: string;
	title: string;
	price: number;
	types: number[];
	sizes: number[];
}

export enum Status {
	CLEAR = '',
	LOADING = 'loading',
	SUCCESS = 'success',
	ERROR = 'error',
}

export interface PizzaSliceState {
	pizzas: Pizza[] | null;
	status: Status;
}

export type FetchPizzasArgs = {
	categoryName: string;
	sortType: ISortType;
	searchValue: string;
	currentPage: string;
}