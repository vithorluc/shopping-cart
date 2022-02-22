import { GET_PRODUCTS_SERVICE } from "@/domain/use-cases/get-products-service";
import { IGetProductsService } from "@/domain/use-cases/get-products-service";
import { ProductModel } from "@/domain/models/product";
import { Mapping, Get, Adapter } from "@tsclean/core";

@Mapping("api/v1/products")
export class GetProductsController {
  constructor(
    @Adapter(GET_PRODUCTS_SERVICE)
    private readonly getProductsService: IGetProductsService
  ) {}

  @Get()
  async getProductsController(): Promise<ProductModel[]> {
    return await this.getProductsService.getProductsService();
  }
}
