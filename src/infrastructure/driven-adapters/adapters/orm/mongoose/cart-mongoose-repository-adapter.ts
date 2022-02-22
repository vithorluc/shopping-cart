import { CartModel, CartParams } from "@/domain/models/cart";
import { CartModelSchema } from "@/infrastructure/driven-adapters/adapters/orm/mongoose/models/cart";

export class CartMongooseRepositoryAdapter {
  async addCartRepository(data: CartParams): Promise<CartModel> {
    return await CartModelSchema.create(data);
  }
}
