import { ProductModel, AddProductParams } from "@/domain/models/product";
import { IAddProductRepository } from "@/domain/models/contracts/add-product-repository";
import { ProductModelSchema } from "@/infrastructure/driven-adapters/adapters/orm/mongoose/models/product";

export class ProductMongooseRepositoryAdapter implements IAddProductRepository {
  async addProductRepository(data: AddProductParams): Promise<ProductModel> {
    return await ProductModelSchema.create(data);
  }
}
