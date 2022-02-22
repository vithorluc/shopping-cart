import { ProductModel, ProductParams } from "@/domain/models/product";

export const ADD_PRODUCT_SERVICE = "ADD_PRODUCT_SERVICE";

export interface IAddProductService {
    addProductService: (data: ProductParams) => Promise<ProductModel>;
}