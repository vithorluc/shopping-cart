import { Adapter, Service } from "@tsclean/core";
import { ProductModel } from "@/domain/models/product";
import { IDeleteProductService } from "@/domain/use-cases/delete-product-service";
import {
  DELETE_PRODUCT_REPOSITORY,
  IDeleteProductRepository,
} from "@/domain/models/contracts/delete-product-repository";

@Service()
export class DeleteProductServiceImpl implements IDeleteProductService {
  constructor(
    @Adapter(DELETE_PRODUCT_REPOSITORY)
    private readonly deleteProductRepository: IDeleteProductRepository
  ) {}

  async deleteProductService(id: String): Promise<ProductModel> {
    return await this.deleteProductRepository.deleteProductRepository(id);
  }
}
