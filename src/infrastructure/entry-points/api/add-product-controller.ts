import { ADD_PRODUCT_SERVICE } from "@/domain/use-cases/add-product-service";
import { IAddProductService } from "@/domain/use-cases/add-product-service";
import { ProductParams, ProductModel } from "@/domain/models/product";
import { Mapping, Body, Post, Adapter, HttpCode } from "@tsclean/core";

@Mapping("api/v1/products")
export class AddProductController {
  constructor(
    @Adapter(ADD_PRODUCT_SERVICE)
    private readonly addProductService: IAddProductService
  ) {}

  @Post()
  @HttpCode(201)
  async addProductController(
    @Body() data: ProductParams
  ): Promise<ProductModel> {
    return await this.addProductService.addProductService(data);
  }
}
