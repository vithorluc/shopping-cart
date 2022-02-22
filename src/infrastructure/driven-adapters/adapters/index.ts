
// entity user
import { ADD_USER_REPOSITORY } from "@/domain/models/contracts/add-user-repository";
import { ADD_USER_SERVICE } from "@/domain/use-cases/add-user-service";
import { AddUserServiceImpl } from "@/domain/use-cases/impl/add-user-service-impl";
import { UserMongooseRepositoryAdapter } from "@/infrastructure/driven-adapters/adapters/orm/mongoose/user-mongoose-repository-adapter";

// entity product
import { ADD_PRODUCT_REPOSITORY } from "@/domain/models/contracts/add-product-repository";
import { ADD_PRODUCT_SERVICE } from "@/domain/use-cases/add-product-service";
import { AddProductServiceImpl } from "@/domain/use-cases/impl/add-product-service-impl";

import { GET_PRODUCT_REPOSITORY } from "@/domain/models/contracts/get-product-repository";
import { GET_PRODUCT_SERVICE } from "@/domain/use-cases/get-product-service";
import { GetProductServiceImpl } from "@/domain/use-cases/impl/get-product-service-impl";

import { GET_PRODUCTS_REPOSITORY } from "@/domain/models/contracts/get-products-repository";
import { GET_PRODUCTS_SERVICE } from "@/domain/use-cases/get-products-service";
import { GetProductsServiceImpl } from "@/domain/use-cases/impl/get-products-service-impl";

import { DELETE_PRODUCT_REPOSITORY } from "@/domain/models/contracts/delete-product-repository";
import { DELETE_PRODUCT_SERVICE } from "@/domain/use-cases/delete-product-service";
import { DeleteProductServiceImpl } from "@/domain/use-cases/impl/delete-product-service-impl";


import { ProductMongooseRepositoryAdapter } from "@/infrastructure/driven-adapters/adapters/orm/mongoose/product-mongoose-repository-adapter";

export const providers = [
  {
    classAdapter: UserMongooseRepositoryAdapter,
    key: ADD_USER_REPOSITORY,
  },
  {
    classAdapter: ProductMongooseRepositoryAdapter,
    key: ADD_PRODUCT_REPOSITORY,
  },
  {
    classAdapter: ProductMongooseRepositoryAdapter,
    key: GET_PRODUCT_REPOSITORY,
  },
  {
    classAdapter: ProductMongooseRepositoryAdapter,
    key: GET_PRODUCTS_REPOSITORY,
  },
  {
    classAdapter: ProductMongooseRepositoryAdapter,
    key: DELETE_PRODUCT_REPOSITORY,
  },
];

export const services = [
  {
    classAdapter: AddUserServiceImpl,
    key: ADD_USER_SERVICE,
  },
  {
    classAdapter: AddProductServiceImpl,
    key: ADD_PRODUCT_SERVICE,
  },
  {
    classAdapter: GetProductServiceImpl,
    key: GET_PRODUCT_SERVICE,
  },
  {
    classAdapter: GetProductsServiceImpl,
    key: GET_PRODUCTS_SERVICE,
  },
  {
    classAdapter: DeleteProductServiceImpl,
    key: DELETE_PRODUCT_SERVICE,
  },
];
