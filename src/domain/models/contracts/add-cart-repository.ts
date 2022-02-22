import { CartModel, CartParams } from "@/domain/models/cart";

export const ADD_CART_REPOSITORY = "ADD_CART_REPOSITORY";

export interface IAddCartRepository {
  addCartRepository: (data: CartParams) => Promise<CartModel>;
}
