import { ADD_CART_SERVICE } from "@/domain/use-cases/add-cart-service";
import { IAddCartService } from "@/domain/use-cases/add-cart-service";
import { CartParams, CartModel } from "@/domain/models/cart";
import { Mapping, Body, Post, Adapter } from "@tsclean/core";

@Mapping("api/v1/carts")
export class AddCartController {
  constructor(
    @Adapter(ADD_CART_SERVICE)
    private readonly addCartService: IAddCartService
  ) {}

  @Post()
  async addCartController(@Body() data: CartParams): Promise<CartModel> {
    return await this.addCartService.addCartService(data);
  }
}
