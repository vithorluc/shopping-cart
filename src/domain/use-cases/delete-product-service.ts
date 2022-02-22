import { ProductModel } from "@/domain/models/product";

export const DELETE_PRODUCT_SERVICE = "DELETE_PRODUCT_SERVICE";

export interface IDeleteProductService {
  deleteProductService: (id: String) => Promise<ProductModel>;
}
