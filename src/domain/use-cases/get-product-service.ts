import { ProductModel } from "@/domain/models/product";

export const GET_PRODUCT_SERVICE = "GET_PRODUCT_SERVICE";

export interface IGetProductService {
  getProductService: (id: String) => Promise<ProductModel>;
}
