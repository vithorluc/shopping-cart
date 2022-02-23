import { Adapter, Service } from "@tsclean/core";
import { CartModel, CartParams } from "@/domain/models/cart";
import { IUpdateCartService } from "@/domain/use-cases/update-cart-service";
import {
  UPDATE_CART_REPOSITORY,
  IUpdateCartRepository,
} from "@/domain/models/contracts/update-cart-repository";

@Service()
export class UpdateCartServiceImpl implements IUpdateCartService {
  constructor(
    @Adapter(UPDATE_CART_REPOSITORY)
    private readonly updateCartRepository: IUpdateCartRepository
  ) {}

  async updateCartService(id: String, data: CartParams): Promise<CartModel> {
    return await this.updateCartRepository.updateCartRepository(id, data);
  }
}
