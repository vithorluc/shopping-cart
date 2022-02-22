// use-cases
import { ADD_USER_SERVICE } from "@/domain/use-cases/add-user-service";
import { ADD_PRODUCT_SERVICE } from "@/domain/use-cases/add-product-service";
import { GET_PRODUCT_SERVICE } from "@/domain/use-cases/get-product-service";
import { GET_PRODUCTS_SERVICE } from "@/domain/use-cases/get-products-service";

// contracts
import { ADD_USER_REPOSITORY } from "@/domain/models/contracts/add-user-repository";
import { ADD_PRODUCT_REPOSITORY } from "@/domain/models/contracts/add-product-repository";
import { GET_PRODUCT_REPOSITORY } from "@/domain/models/contracts/get-product-repository";
import { GET_PRODUCTS_REPOSITORY } from "@/domain/models/contracts/get-products-repository";

// impl
import { AddUserServiceImpl } from "@/domain/use-cases/impl/add-user-service-impl";
import { AddProductServiceImpl } from "@/domain/use-cases/impl/add-product-service-impl";
import { GetProductServiceImpl } from "@/domain/use-cases/impl/get-product-service-impl";
import { GetProductsServiceImpl } from "@/domain/use-cases/impl/get-products-service-impl";

// adapters
import { UserMongooseRepositoryAdapter } from "@/infrastructure/driven-adapters/adapters/orm/mongoose/user-mongoose-repository-adapter";
import { ProductMongooseRepositoryAdapter } from "@/infrastructure/driven-adapters/adapters/orm/mongoose/product-mongoose-repository-adapter";

export const adapters = [
  {
    useClass: UserMongooseRepositoryAdapter,
    provide: ADD_USER_REPOSITORY,
  },
  {
    useClass: ProductMongooseRepositoryAdapter,
    provide: ADD_PRODUCT_REPOSITORY,
  },
  {
    useClass: ProductMongooseRepositoryAdapter,
    provide: GET_PRODUCT_REPOSITORY,
  },
  {
    useClass: ProductMongooseRepositoryAdapter,
    provide: GET_PRODUCTS_REPOSITORY,
  },
];

export const services = [
  {
    useClass: AddUserServiceImpl,
    provide: ADD_USER_SERVICE,
  },
  {
    useClass: AddProductServiceImpl,
    provide: ADD_PRODUCT_SERVICE,
  },
  {
    useClass: GetProductServiceImpl,
    provide: GET_PRODUCT_SERVICE,
  },
  {
    useClass: GetProductsServiceImpl,
    provide: GET_PRODUCTS_SERVICE,
  },
];
