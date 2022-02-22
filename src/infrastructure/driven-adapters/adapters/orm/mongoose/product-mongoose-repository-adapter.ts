import { ProductModel, ProductParams } from "@/domain/models/product";
import { IAddProductRepository } from "@/domain/models/contracts/add-product-repository";
import { IGetProductRepository } from "@/domain/models/contracts/get-product-repository";
import { ProductModelSchema } from "@/infrastructure/driven-adapters/adapters/orm/mongoose/models/product";

export class ProductMongooseRepositoryAdapter
  implements IAddProductRepository, IGetProductRepository
{
  async addProductRepository(data: ProductParams): Promise<ProductModel> {
    return await ProductModelSchema.create(data);
  }

  async getProductRepository(id: String): Promise<ProductModel>  {
    return await ProductModelSchema.findOne({_id: id}); 
  }

}
