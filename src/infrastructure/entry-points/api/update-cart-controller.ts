import { UPDATE_CART_SERVICE } from "@/domain/use-cases/update-cart-service";
import { IUpdateCartService } from "@/domain/use-cases/update-cart-service";
import { CartModel, CartParams } from "@/domain/models/cart";
import { Mapping, Param, Adapter, Body, Put } from "@tsclean/core";

@Mapping("api/v1/carts")
export class UpdateCartController {
  constructor(
    @Adapter(UPDATE_CART_SERVICE)
    private readonly updateCartService: IUpdateCartService
  ) {}

  @Put(":user_id")
  async updateCartController(
    @Param("user_id") user_id: String,
    @Body() data: CartParams
  ): Promise<CartModel> {
    return await this.updateCartService.updateCartService(user_id, data);
  }
}
