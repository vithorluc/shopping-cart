import { CartModel, CartParams } from "@/domain/models/cart";

export const ADD_CART_SERVICE = "ADD_CART_SERVICE";

export interface IAddCartService {
  addCartService: (data: CartParams) => Promise<CartModel>;
}
