import {
  DELETE_PRODUCT_SERVICE,
  IDeleteProductService,
} from "@/domain/use-cases/delete-product-service";
import { ProductModel } from "@/domain/models/product";
import { Mapping, Param, Delete, Adapter } from "@tsclean/core";

@Mapping("api/v1/products")
export class DeleteProductController {
  constructor(
    @Adapter(DELETE_PRODUCT_SERVICE)
    private readonly deleteProductService: IDeleteProductService
  ) {}

  @Delete(":id")
  async deleteProductController(
    @Param("id") id: String
  ): Promise<ProductModel> {
    return await this.deleteProductService.deleteProductService(id);
  }
}
