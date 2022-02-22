import { GET_PRODUCT_SERVICE } from "@/domain/use-cases/get-product-service";
import { IGetProductService } from "@/domain/use-cases/get-product-service";
import { ProductModel } from "@/domain/models/product";
import { Mapping, Param, Get, Adapter } from "@tsclean/core";

@Mapping("api/v1/products")
export class GetProductController {
  constructor(
    @Adapter(GET_PRODUCT_SERVICE)
    private readonly getProductService: IGetProductService
  ) {}

  @Get(":id")
  async getProductController(@Param('id') id): Promise<ProductModel> {
    return await this.getProductService.getProductService(id);
  }
}
