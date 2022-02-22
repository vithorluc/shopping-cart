import { ProductModel } from "@/domain/models/product";

export const GET_PRODUCTS_SERVICE = "GET_PRODUCTS_SERVICE";

export interface IGetProductsService {
    getProductsService: () => Promise<ProductModel[]>;
}