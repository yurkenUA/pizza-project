export type ISortType = {
	title: string;
	sortProperty: string;
}

export interface FilterSliceState {
	searchValue: string;
	categoryName: string;
	currentPage: number;
	sortType?: ISortType;
}
