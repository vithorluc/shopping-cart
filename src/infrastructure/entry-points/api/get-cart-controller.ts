import { GET_CART_SERVICE } from "@/domain/use-cases/get-cart-service";
import { IGetCartService } from "@/domain/use-cases/get-cart-service";
import { CartModel } from "@/domain/models/cart";
import { Mapping, Param, Get, Adapter } from "@tsclean/core";

@Mapping("api/v1/carts")
export class GetCartController {
  constructor(
    @Adapter(GET_CART_SERVICE)
    private readonly getCartService: IGetCartService
  ) {}

  @Get(":id")
  async getCartController(@Param("id") id: String): Promise<CartModel> {
    return await this.getCartService.getCartService(id);
  }
}
