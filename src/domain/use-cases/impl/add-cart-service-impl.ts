import { Adapter, Service } from "@tsclean/core";
import { CartModel, CartParams } from "@/domain/models/cart";
import { IAddCartService } from "@/domain/use-cases/add-cart-service";
import {
  ADD_CART_REPOSITORY,
  IAddCartRepository,
} from "@/domain/models/contracts/add-cart-repository";

@Service()
export class AddCartServiceImpl implements IAddCartService {
  constructor(
    @Adapter(ADD_CART_REPOSITORY)
    private readonly addCartRepository: IAddCartRepository
  ) {}

  async addCartService(data: CartParams): Promise<CartModel> {
    return await this.addCartRepository.addCartRepository(data);
  }
}
