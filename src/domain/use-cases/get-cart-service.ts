import { CartModel } from "@/domain/models/cart";

export const GET_CART_SERVICE = "GET_CART_SERVICE";

export interface IGetCartService {
  getCartService: (id: String) => Promise<CartModel>;
}
