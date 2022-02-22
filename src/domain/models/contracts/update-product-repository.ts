import { ProductModel, ProductParams } from "@/domain/models/product";

export const UPDATE_PRODUCT_REPOSITORY = "UPDATE_PRODUCT_REPOSITORY";

export interface IUpdateProductRepository {
  updateProductRepository: (id: String, data: ProductParams) => Promise<ProductModel>;
}
