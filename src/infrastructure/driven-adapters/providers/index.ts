// use-cases
import { ADD_USER_SERVICE } from "@/domain/use-cases/add-user-service";
import { ADD_PRODUCT_SERVICE } from "@/domain/use-cases/add-product-service";
import { GET_PRODUCT_SERVICE } from "@/domain/use-cases/get-product-service";
import { GET_PRODUCTS_SERVICE } from "@/domain/use-cases/get-products-service";
import { DELETE_PRODUCT_SERVICE } from "@/domain/use-cases/delete-product-service";
import { UPDATE_PRODUCT_SERVICE } from "@/domain/use-cases/update-product-service";
import { ADD_CART_SERVICE } from "@/domain/use-cases/add-cart-service";
import { UPDATE_CART_SERVICE } from "@/domain/use-cases/update-cart-service";
// contracts
import { ADD_USER_REPOSITORY } from "@/domain/models/contracts/add-user-repository";
import { ADD_PRODUCT_REPOSITORY } from "@/domain/models/contracts/add-product-repository";
import { GET_PRODUCT_REPOSITORY } from "@/domain/models/contracts/get-product-repository";
import { GET_PRODUCTS_REPOSITORY } from "@/domain/models/contracts/get-products-repository";
import { DELETE_PRODUCT_REPOSITORY } from "@/domain/models/contracts/delete-product-repository";
import { UPDATE_PRODUCT_REPOSITORY } from "@/domain/models/contracts/update-product-repository";
import { ADD_CART_REPOSITORY } from "@/domain/models/contracts/add-cart-repository";
import { UPDATE_CART_REPOSITORY } from "@/domain/models/contracts/update-cart-repository";
// impl
import { AddUserServiceImpl } from "@/domain/use-cases/impl/add-user-service-impl";
import { AddProductServiceImpl } from "@/domain/use-cases/impl/add-product-service-impl";
import { GetProductServiceImpl } from "@/domain/use-cases/impl/get-product-service-impl";
import { GetProductsServiceImpl } from "@/domain/use-cases/impl/get-products-service-impl";
import { DeleteProductServiceImpl } from "@/domain/use-cases/impl/delete-product-service-impl";
import { UpdateProductServiceImpl } from "@/domain/use-cases/impl/update-product-service-impl";
import { AddCartServiceImpl } from "@/domain/use-cases/impl/add-cart-service-impl";
import { UpdateCartServiceImpl } from "@/domain/use-cases/impl/update-cart-service-impl";
// adapters
import { CartMongooseRepositoryAdapter } from "../adapters/orm/mongoose/cart-mongoose-repository-adapter";
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
  {
    useClass: ProductMongooseRepositoryAdapter,
    provide: DELETE_PRODUCT_REPOSITORY,
  },
  {
    useClass: ProductMongooseRepositoryAdapter,
    provide: UPDATE_PRODUCT_REPOSITORY,
  },
  {
    useClass: CartMongooseRepositoryAdapter,
    provide: ADD_CART_REPOSITORY,
  },
  {
    useClass: CartMongooseRepositoryAdapter,
    provide: UPDATE_CART_REPOSITORY,
  }
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
  {
    useClass: DeleteProductServiceImpl,
    provide: DELETE_PRODUCT_SERVICE,
  },
  {
    useClass: UpdateProductServiceImpl,
    provide: UPDATE_PRODUCT_SERVICE,
  },
  {
    useClass: AddCartServiceImpl,
    provide: ADD_CART_SERVICE
  },
  {
    useClass: UpdateCartServiceImpl,
    provide: UPDATE_CART_SERVICE
  }
];
