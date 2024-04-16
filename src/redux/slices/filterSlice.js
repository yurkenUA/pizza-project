import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
		setCategoryName: (state, action) => {
			state.categoryName = action.payload;
		},
		setSearchValue: (state, action) => {
			state.searchValue = action.payload;
		},
		setSortType: (state, action) => {
			state.sortType = action.payload;
		},
		setCurrentPage: (state, action) => {
			state.currentPage = action.payload;
		},
		setFilters: (state, action) => {
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
