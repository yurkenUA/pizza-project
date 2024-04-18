import { CartItem } from "../redux/cart/types";
import { getTotalResult } from "./getTotalResult";

export const getCartFromLS = () => {
    const data = localStorage.getItem('cart');
    const items = data ? JSON.parse(data) : [];
    const totalPrice = getTotalResult(items, 'price');
    const totalCount = getTotalResult(items, 'count');


    return {
        items: items as CartItem[],
        totalPrice,
        totalCount
    }
}