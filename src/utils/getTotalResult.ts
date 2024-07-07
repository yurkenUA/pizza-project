import { CartItem } from "../redux/cart/types";

export const getTotalResult = (arr: CartItem[], option: string) => {
    return option === 'price' ? arr.reduce((sum, cur) => sum + cur.price * cur.count, 0) : arr.reduce((sum, cur) => cur.count + sum, 0);
}