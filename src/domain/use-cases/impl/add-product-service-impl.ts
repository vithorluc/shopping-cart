import { Adapter, Service } from "@tsclean/core";
import { ProductModel } from "@/domain/models/product";
import { ProductParams } from "@/domain/models/product";
import { IAddProductService } from "@/domain/use-cases/add-product-service";
import {
  ADD_PRODUCT_REPOSITORY,
  IAddProductRepository,
} from "@/domain/models/contracts/add-product-repository";

@Service()
export class AddProductServiceImpl implements IAddProductService {
  constructor(
    @Adapter(ADD_PRODUCT_REPOSITORY)
    private readonly addProductRepository: IAddProductRepository
  ) {}

  async addProductService(data: ProductParams): Promise<ProductModel> {
    return await this.addProductRepository.addProductRepository(data);
  }
}
