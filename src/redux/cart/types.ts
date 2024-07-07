export type CartItem = {
	id: string;
	imageUrl: string;
	title: string;
	price: number;
	type: number;
	size: number;
	count: number;
}

export interface CartSliceState {
	totalPrice: number;
	items: CartItem[];
	totalCount: number;
}