import { ProductModel } from "@/domain/models/product";
import { model, Schema } from "mongoose";

const schema = new Schema<ProductModel>({
  id: { type: String },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

export const ProductModelSchema = model<ProductModel>("products", schema);
