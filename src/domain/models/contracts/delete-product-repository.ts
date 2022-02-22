import { ProductModel } from "@/domain/models/product";

export const DELETE_PRODUCT_REPOSITORY = "DELETE_PRODUCT_REPOSITORY";

export interface IDeleteProductRepository {
  deleteProductRepository: (id: String) => Promise<ProductModel>;
}
