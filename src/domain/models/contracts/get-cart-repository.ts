import { CartModel } from "@/domain/models/cart";

export const GET_CART_REPOSITORY = "GET_CART_REPOSITORY";

export interface IGetCartRepository {
  getCartRepository: (id: String) => Promise<CartModel>;
}
