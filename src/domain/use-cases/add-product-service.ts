import { ProductModel, AddProductParams } from "@/domain/models/product";

export const ADD_PRODUCT_SERVICE = "ADD_PRODUCT_SERVICE";

export interface IAddProductService {
    addProductService: (data: AddProductParams) => Promise<ProductModel>;
}