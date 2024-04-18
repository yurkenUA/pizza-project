import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterSliceState, ISortType } from './types';

const initialState: FilterSliceState = {
	searchValue: '',
	categoryName: 'All',
	currentPage: 1,
	sortType: {
		title: 'popularity',
		sortProperty: 'rating',
	},
};

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setCategoryName: (state, action: PayloadAction<string>) => {
			state.categoryName = action.payload;
		},
		setSearchValue: (state, action: PayloadAction<string>) => {
			state.searchValue = action.payload;
		},
		setSortType: (state, action: PayloadAction<ISortType>) => {
			state.sortType = action.payload;
		},
		setCurrentPage: (state, action: PayloadAction<number>) => {
			state.currentPage = action.payload;
		},
		setFilters: (state, action: PayloadAction<FilterSliceState>) => {
 			state.categoryName = action.payload.categoryName;
			state.currentPage = action.payload.currentPage;
			state.sortType = action.payload.sortType;
		},
		setClearFilters: (state) => (state = initialState),
	},
});
 
export const {
	setCategoryName,
	setSortType,
	setCurrentPage,
	setFilters,
	setClearFilters,
	setSearchValue, 
} = filterSlice.actions;

export default filterSlice.reducer;
