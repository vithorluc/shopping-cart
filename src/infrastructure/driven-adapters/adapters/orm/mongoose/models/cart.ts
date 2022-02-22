import { CartModel } from "@/domain/models/cart";
import { model, Schema, Types } from "mongoose";

const schema = new Schema<CartModel>({
  id: { type: String },
  user_id: { type: Types.ObjectId, ref: "Users", required: true, unique: true },
  total: { type: Number, default: 0 },
  subtotal: { type: Number, default: 0 },
  taxes: { type: Number, default: 0 },
  itens: [
    {
      productId: { type: Types.ObjectId, ref: "Products", unique: true },
      quantity: { type: Number, min: 1},
    },
  ],
  status: { type: String, default: "PENDING" },
});

export const CartModelSchema = model<CartModel>("carts", schema);
