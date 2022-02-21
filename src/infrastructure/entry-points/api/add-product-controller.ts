import { ADD_PRODUCT_SERVICE } from "@/domain/use-cases/add-product-service";
import { IAddProductService } from "@/domain/use-cases/add-product-service";
import { AddProductParams, ProductModel } from "@/domain/models/product";
import { Mapping, Body, Post, Adapter } from "@tsclean/core";

@Mapping("api/v1/products")
export class AddProductController {
  constructor(
    @Adapter(ADD_PRODUCT_SERVICE)
    private readonly addProductService: IAddProductService
  ) {}

  @Post()
  async addUserController(
    @Body() data: AddProductParams
  ): Promise<ProductModel> {
    return await this.addProductService.addProductService(data);
  }
}
