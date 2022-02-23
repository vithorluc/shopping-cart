import { AddUserController } from "@/infrastructure/entry-points/api/add-user-controller";

import { GetProductController } from "@/infrastructure/entry-points/api/get-product-controller";
import { AddProductController } from "@/infrastructure/entry-points/api/add-product-controller";
import { GetProductsController } from "@/infrastructure/entry-points/api/get-products-controller";
import { DeleteProductController } from "@/infrastructure/entry-points/api/delete-product-controller";
import { UpdateProductController } from "@/infrastructure/entry-points/api/update-product-controller";

import { AddCartController } from "@/infrastructure/entry-points/api/add-cart-controller";;
import { UpdateCartController } from "@/infrastructure/entry-points/api/update-cart-controller";
import { GetCartController } from "@/infrastructure/entry-points/api/get-cart-controller";;
export const controllers = [
  AddUserController,
  AddProductController,
  GetProductController,
  GetProductsController,
  DeleteProductController,
  UpdateProductController,
  AddCartController,
  UpdateCartController,
  GetCartController
];
