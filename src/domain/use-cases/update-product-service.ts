import { ProductModel, ProductParams } from "@/domain/models/product";

export const UPDATE_PRODUCT_SERVICE = "UPDATE_PRODUCT_SERVICE";

export interface IUpdateProductService {
  updateProductService: (id: String, data: ProductParams) => Promise<ProductModel>;
}
