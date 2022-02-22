import { Adapter, Service } from "@tsclean/core";
import { ProductModel } from "@/domain/models/product";
import { IGetProductService } from "@/domain/use-cases/get-product-service";
import {
  GET_PRODUCT_REPOSITORY,
  IGetProductRepository,
} from "@/domain/models/contracts/get-product-repository";

@Service()
export class GetProductServiceImpl implements IGetProductService {
  constructor(
    @Adapter(GET_PRODUCT_REPOSITORY)
    private readonly getProductRepository: IGetProductRepository
  ) {}

  async getProductService(id: String): Promise<ProductModel> {
    return await this.getProductRepository.getProductRepository(id);
  }
}
