import { ProductModel } from "@/domain/models/product";

export const GET_PRODUCTS_REPOSITORY = "GET_PRODUCTS_REPOSITORY";

export interface IGetProductsRepository {
  getProductsRepository: () => Promise<ProductModel[]>;
}
