import { UPDATE_PRODUCT_SERVICE } from "@/domain/use-cases/update-product-service";
import { IUpdateProductService } from "@/domain/use-cases/update-product-service";
import { ProductModel, ProductParams } from "@/domain/models/product";
import { Mapping, Param, Adapter, Body, Put } from "@tsclean/core";

@Mapping("api/v1/products")
export class UpdateProductController {
  constructor(
    @Adapter(UPDATE_PRODUCT_SERVICE)
    private readonly updateProductService: IUpdateProductService
  ) {}

  @Put(":id")
  async updateProductController(
    @Param("id") id: String,
    @Body() data: ProductParams
  ): Promise<ProductModel> {
    return await this.updateProductService.updateProductService(id, data);
  }
}
