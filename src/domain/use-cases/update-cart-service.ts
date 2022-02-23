import { CartModel, CartParams } from "@/domain/models/cart";

export const UPDATE_CART_SERVICE = "UPDATE_CART_SERVICE";

export interface IUpdateCartService {
  updateCartService: (id: String, data: CartParams) => Promise<CartModel>;
}
