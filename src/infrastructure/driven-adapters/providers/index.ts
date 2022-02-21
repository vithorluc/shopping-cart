import { ADD_USER_REPOSITORY } from "@/domain/models/contracts/add-user-repository";
import { ADD_USER_SERVICE } from "@/domain/use-cases/add-user-service";
import { AddUserServiceImpl } from "@/domain/use-cases/impl/add-user-service-impl";
import { UserMongooseRepositoryAdapter } from "@/infrastructure/driven-adapters/adapters/orm/mongoose/user-mongoose-repository-adapter";

import { ADD_PRODUCT_REPOSITORY } from "@/domain/models/contracts/add-product-repository";
import { ADD_PRODUCT_SERVICE } from "@/domain/use-cases/add-product-service";
import { AddProductServiceImpl } from "@/domain/use-cases/impl/add-product-service-impl";
import { ProductMongooseRepositoryAdapter } from "@/infrastructure/driven-adapters/adapters/orm/mongoose/product-mongoose-repository-adapter";

export const adapters = [
  {
    useClass: UserMongooseRepositoryAdapter,
    provide: ADD_USER_REPOSITORY,
  },
  { useClass: ProductMongooseRepositoryAdapter, provide: ADD_PRODUCT_REPOSITORY },
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
];
