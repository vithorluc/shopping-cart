import { CartModel, CartParams } from "@/domain/models/cart";
import { CartModelSchema } from "@/infrastructure/driven-adapters/adapters/orm/mongoose/models/cart";
import { ProductModelSchema } from "@/infrastructure/driven-adapters/adapters/orm/mongoose/models/product";
import { IAddCartRepository } from "@/domain/models/contracts/add-cart-repository";
import { IUpdateCartRepository } from "@/domain/models/contracts/update-cart-repository";
import { IGetCartRepository } from "@/domain/models/contracts/get-cart-repository";
import { HttpException } from "@tsclean/core";
export class CartMongooseRepositoryAdapter
  extends HttpException
  implements IAddCartRepository, IUpdateCartRepository, IGetCartRepository
{
  async getCartRepository(id: String): Promise<CartModel> {
    const cart = await CartModelSchema.findById({ _id: id });

    if (!cart) {
      throw new HttpException("cart not found", 404);
    }

    return cart;
  }

  async addCartRepository(data: CartParams): Promise<CartModel> {
    (data.total = 0), (data.taxes = 0), (data.subtotal = 0);

    const cart = await CartModelSchema.findOne({ user_id: data.user_id });

    if (cart) {
      throw new HttpException(
        `cart with user_id ${data.user_id} already exists`,
        400
      );
    }

    await Promise.all(
      data.orders.map(async (prod, index) => {
        const product = await ProductModelSchema.findById({ _id: prod.id });
        if (!product)
          throw new HttpException(`product with id ${prod.id} not found`, 404);
        data.orders[index].price = product.price;
        data.orders[index].name = product.name;
        //@ts-ignore
        data.orders[index]._id = prod.id;
        if (!data.orders[index].quantity)
          throw new HttpException(
            `quantity in order with id ${prod.id} is mandatory`,
            400
          );
        data.total += product.price * data.orders[index].quantity;
        data.subtotal += product.price;
        return data;
      })
    );

    return CartModelSchema.create(data);
  }

  async updateCartRepository(id: string, data: CartParams): Promise<CartModel> {
    const cart = await CartModelSchema.findOne({ user_id: data.user_id });

    if (!cart) {
      throw new HttpException(
        "No cart is available for this user, please create one",
        404
      );
    }

    if (data.discount) cart.discount = data.discount;
    if (data.taxes) cart.taxes = data.taxes;

    await Promise.all(
      data.orders.map(async (prod, index) => {
        let product = await ProductModelSchema.findById({
          _id: prod.id,
        });

        if (!product)
          throw new HttpException(`product with id ${prod.id} not found`, 404);

        let hasProductInCart = cart.orders.findIndex((order) =>
          //@ts-ignore
          order._id.equals(product._id)
        );
        if (hasProductInCart !== -1) {
          let cartQty = cart.orders[hasProductInCart].quantity;
          let prodQty = prod.quantity;

          if (prodQty === 0) {
            //@ts-ignore
            cart.orders = cart.orders.splice(index, 1);
          } else {
            if (cartQty != prodQty)
              cart.orders[hasProductInCart].quantity = prodQty;
          }
        } else {
          if (prod.quantity != 0)
            cart.orders.push({
              //@ts-ignore
              _id: prod.id,
              price: product.price,
              name: product.name,
              quantity: prod.quantity,
            });

          //@ts-ignore
          cart.orders._id = prod.id;
        }
        return cart;
      })
    );

    cart.total = 0;
    cart.subtotal = 0;

    cart.orders.map((order) => {
      cart.total += order.quantity * order.price;
      cart.subtotal += order.price;
    });

    cart.total =
      (cart.total -
      (cart.discount * cart.total) / 100) +
      (cart.taxes * cart.total) / 100;

    await cart.updateOne(cart);

    return CartModelSchema.findById({ _id: cart._id });
  }
}
