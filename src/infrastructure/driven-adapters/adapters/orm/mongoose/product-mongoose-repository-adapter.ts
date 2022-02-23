import { ProductModel, ProductParams } from "@/domain/models/product";
import { IAddProductRepository } from "@/domain/models/contracts/add-product-repository";
import { IGetProductRepository } from "@/domain/models/contracts/get-product-repository";
import { IGetProductsRepository } from "@/domain/models/contracts/get-products-repository";
import { IDeleteProductRepository } from "@/domain/models/contracts/delete-product-repository";
import { IUpdateProductRepository } from "@/domain/models/contracts/update-product-repository";
import { ProductModelSchema } from "@/infrastructure/driven-adapters/adapters/orm/mongoose/models/product";
import { HttpException } from "@tsclean/core";

export class ProductMongooseRepositoryAdapter
  extends HttpException
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
    const product = await ProductModelSchema.findById({ _id: id });

    if (!product) {
      throw new HttpException("product not found", 404);
    }

    return product;
  }

  async getProductsRepository(): Promise<ProductModel[]> {
    return await ProductModelSchema.find({});
  }

  async deleteProductRepository(id: String): Promise<ProductModel | any> {
    const product = await ProductModelSchema.findById({ _id: id });

    if (!product) {
      throw new HttpException("product not found", 404);
    }

    return product.delete();
  }

  async updateProductRepository(
    id: String,
    data: ProductParams
  ): Promise<ProductModel> {
    const product = await ProductModelSchema.findById({ _id: id });

    if (!product) {
      throw new HttpException("product not found", 404);
    }

    return product.update(data);
  }
}
