import { ProductModel, ProductParams } from "@/domain/models/product";
import { IAddProductRepository } from "@/domain/models/contracts/add-product-repository";
import { IGetProductRepository } from "@/domain/models/contracts/get-product-repository";
import { IGetProductsRepository } from "@/domain/models/contracts/get-products-repository";
import { IDeleteProductRepository } from "@/domain/models/contracts/delete-product-repository";
import { IUpdateProductRepository } from "@/domain/models/contracts/update-product-repository";
import { ProductModelSchema } from "@/infrastructure/driven-adapters/adapters/orm/mongoose/models/product";

export class ProductMongooseRepositoryAdapter
  implements
    IAddProductRepository,
    IGetProductRepository,
    IGetProductsRepository,
    IDeleteProductRepository,
    IUpdateProductRepository
{
  async addProductRepository(data: ProductParams): Promise<ProductModel> {
    return await ProductModelSchema.create(data);
  }

  async getProductRepository(id: String): Promise<ProductModel> {
    return await ProductModelSchema.findById({ _id: id });
  }

  async getProductsRepository(): Promise<ProductModel[]> {
    return await ProductModelSchema.find({});
  }

  async deleteProductRepository(id: String): Promise<ProductModel> {
    return await ProductModelSchema.findByIdAndDelete({ _id: id });
  }

  async updateProductRepository(
    id: String,
    data: ProductParams
  ): Promise<ProductModel> {
    return await ProductModelSchema.findOneAndUpdate({ _id: id }, data);
  }
}
