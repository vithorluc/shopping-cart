import { ProductModel } from "./product";

export type CartModel = {
  id: string | number;
  user_id: any | string | number;
  total: number;
  subtotal: number;
  taxes: number;
  orders: Array<ProductModel>;
  status: string;
  discount: number; 
};

export type CartParams = Omit<CartModel, "id">;
