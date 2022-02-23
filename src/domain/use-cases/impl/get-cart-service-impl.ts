import { Adapter, Service } from "@tsclean/core";
import { CartModel } from "@/domain/models/cart";
import { IGetCartService } from "@/domain/use-cases/get-cart-service";
import {
  GET_CART_REPOSITORY,
  IGetCartRepository,
} from "@/domain/models/contracts/get-cart-repository";

@Service()
export class GetCartServiceImpl implements IGetCartService {
  constructor(
    @Adapter(GET_CART_REPOSITORY)
    private readonly getCartRepository: IGetCartRepository
  ) {}

  async getCartService(id: String): Promise<CartModel> {
    return await this.getCartRepository.getCartRepository(id);
  }
}
