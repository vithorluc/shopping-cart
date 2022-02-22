import { Adapter, Service } from "@tsclean/core";
import { ProductModel, ProductParams } from "@/domain/models/product";
import { IUpdateProductService } from "@/domain/use-cases/update-product-service";
import {
  UPDATE_PRODUCT_REPOSITORY,
  IUpdateProductRepository,
} from "@/domain/models/contracts/update-product-repository";

@Service()
export class UpdateProductServiceImpl implements IUpdateProductService {
  constructor(
    @Adapter(UPDATE_PRODUCT_REPOSITORY)
    private readonly updateProductRepository: IUpdateProductRepository
  ) {}

  async updateProductService(id: String, data: ProductParams): Promise<ProductModel> {
    return await this.updateProductRepository.updateProductRepository(id, data);
  }
}
