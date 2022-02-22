import { Adapter, Service } from "@tsclean/core";
import { ProductModel } from "@/domain/models/product";
import { IGetProductsService } from "@/domain/use-cases/get-products-service";
import {
  GET_PRODUCTS_REPOSITORY,
  IGetProductsRepository,
} from "@/domain/models/contracts/get-products-repository";

@Service()
export class GetProductsServiceImpl implements IGetProductsService {
  constructor(
    @Adapter(GET_PRODUCTS_REPOSITORY)
    private readonly getProductsRepository: IGetProductsRepository
  ) {}

  async getProductsService(): Promise<ProductModel[]> {
    return await this.getProductsRepository.getProductsRepository();
  }
}
