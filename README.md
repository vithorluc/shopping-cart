# shopping-cart

```
shopping-cart
├─ .gitignore
├─ README.md
├─ docker-compose.yml
├─ package-lock.json
├─ package.json
├─ src
│  ├─ application
│  │  ├─ app.ts
│  │  └─ config
│  │     └─ environment.ts
│  ├─ deployment
│  │  └─ Dockerfile
│  ├─ domain
│  │  ├─ models
│  │  │  ├─ contracts
│  │  │  │  ├─ add-product-repository.ts
│  │  │  │  ├─ add-user-repository.ts
│  │  │  │  ├─ delete-product-repository.ts
│  │  │  │  ├─ get-product-repository.ts
│  │  │  │  ├─ get-products-repository.ts
│  │  │  │  └─ update-product-repository.ts
│  │  │  ├─ product.ts
│  │  │  └─ user.ts
│  │  └─ use-cases
│  │     ├─ add-product-service.ts
│  │     ├─ add-user-service.ts
│  │     ├─ delete-product-service.ts
│  │     ├─ get-product-service.ts
│  │     ├─ get-products-service.ts
│  │     ├─ impl
│  │     │  ├─ add-product-service-impl.ts
│  │     │  ├─ add-user-service-impl.ts
│  │     │  ├─ delete-product-service-impl.ts
│  │     │  ├─ get-product-service-impl.ts
│  │     │  ├─ get-products-service-impl.ts
│  │     │  └─ update-product-service-impl.ts
│  │     └─ update-product-service.ts
│  ├─ index.ts
│  └─ infrastructure
│     ├─ driven-adapters
│     │  ├─ adapters
│     │  │  ├─ index.ts
│     │  │  └─ orm
│     │  │     └─ mongoose
│     │  │        ├─ models
│     │  │        │  ├─ product.ts
│     │  │        │  └─ user.ts
│     │  │        ├─ product-mongoose-repository-adapter.ts
│     │  │        └─ user-mongoose-repository-adapter.ts
│     │  ├─ index.ts
│     │  └─ providers
│     │     └─ index.ts
│     └─ entry-points
│        ├─ api
│        │  ├─ add-product-controller.ts
│        │  ├─ add-user-controller.ts
│        │  ├─ delete-product-controller.ts
│        │  ├─ get-product-controller.ts
│        │  ├─ get-products-controller.ts
│        │  ├─ index.ts
│        │  └─ update-product-controller.ts
│        ├─ helpers
│        └─ index.ts
├─ tests
│  ├─ domain
│  └─ infrastructure
├─ tsconfig-build.json
└─ tsconfig.json

```