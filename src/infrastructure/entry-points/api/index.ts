import { AddUserController } from "@/infrastructure/entry-points/api/add-user-controller";

import { GetProductController } from "@/infrastructure/entry-points/api/get-product-controller";
import { AddProductController } from "@/infrastructure/entry-points/api/add-product-controller";
import { GetProductsController } from "@/infrastructure/entry-points/api/get-products-controller";
export const controllers = [
  AddUserController,
  AddProductController,
  GetProductController,
  GetProductsController
];
