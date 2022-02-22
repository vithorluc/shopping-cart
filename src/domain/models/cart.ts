import { ProductModel } from "./product";

export type CartModel = {
  id: string | number;
  user_id: any | string | number;
  total: number;
  subtotal: number;
  taxes: number;
  itens: Array<ProductModel>;
  status: string;
};

export type CartParams = Omit<CartModel, "id">;
