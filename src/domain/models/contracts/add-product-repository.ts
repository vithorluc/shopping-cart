import { ProductModel, ProductParams } from "@/domain/models/product";

export const ADD_PRODUCT_REPOSITORY = "ADD_PRODUCT_REPOSITORY";

export interface IAddProductRepository {
    addProductRepository: (data: ProductParams) => Promise<ProductModel>;
}
