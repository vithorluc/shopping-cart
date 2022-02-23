import { CartModel, CartParams } from "@/domain/models/cart";

export const UPDATE_CART_REPOSITORY = "UPDATE_CART_REPOSITORY";

export interface IUpdateCartRepository {
  updateCartRepository: (id: String, data: CartParams) => Promise<CartModel>;
}
