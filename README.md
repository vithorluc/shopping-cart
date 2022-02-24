# shopping-cart

```
shopping-cart
├─ .git
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
│  │  │  ├─ cart.ts
│  │  │  ├─ contracts
│  │  │  │  ├─ add-cart-repository.ts
│  │  │  │  ├─ add-product-repository.ts
│  │  │  │  ├─ add-user-repository.ts
│  │  │  │  ├─ delete-product-repository.ts
│  │  │  │  ├─ get-cart-repository.ts
│  │  │  │  ├─ get-product-repository.ts
│  │  │  │  ├─ get-products-repository.ts
│  │  │  │  ├─ update-cart-repository.ts
│  │  │  │  └─ update-product-repository.ts
│  │  │  ├─ product.ts
│  │  │  └─ user.ts
│  │  └─ use-cases
│  │     ├─ add-cart-service.ts
│  │     ├─ add-product-service.ts
│  │     ├─ add-user-service.ts
│  │     ├─ delete-product-service.ts
│  │     ├─ get-cart-service.ts
│  │     ├─ get-product-service.ts
│  │     ├─ get-products-service.ts
│  │     ├─ impl
│  │     │  ├─ add-cart-service-impl.ts
│  │     │  ├─ add-product-service-impl.ts
│  │     │  ├─ add-user-service-impl.ts
│  │     │  ├─ delete-product-service-impl.ts
│  │     │  ├─ get-cart-service-impl.ts
│  │     │  ├─ get-product-service-impl.ts
│  │     │  ├─ get-products-service-impl.ts
│  │     │  ├─ update-cart-service-impl.ts
│  │     │  └─ update-product-service-impl.ts
│  │     ├─ update-cart-service.ts
│  │     └─ update-product-service.ts
│  ├─ index.ts
│  └─ infrastructure
│     ├─ driven-adapters
│     │  ├─ adapters
│     │  │  ├─ index.ts
│     │  │  └─ orm
│     │  │     └─ mongoose
│     │  │        ├─ cart-mongoose-repository-adapter.ts
│     │  │        ├─ models
│     │  │        │  ├─ cart.ts
│     │  │        │  ├─ product.ts
│     │  │        │  └─ user.ts
│     │  │        ├─ product-mongoose-repository-adapter.ts
│     │  │        └─ user-mongoose-repository-adapter.ts
│     │  ├─ index.ts
│     │  └─ providers
│     │     └─ index.ts
│     └─ entry-points
│        ├─ api
│        │  ├─ add-cart-controller.ts
│        │  ├─ add-product-controller.ts
│        │  ├─ add-user-controller.ts
│        │  ├─ delete-product-controller.ts
│        │  ├─ get-cart-controller.ts
│        │  ├─ get-product-controller.ts
│        │  ├─ get-products-controller.ts
│        │  ├─ index.ts
│        │  ├─ update-cart-controller.ts
│        │  └─ update-product-controller.ts
│        ├─ helpers
│        └─ index.ts
├─ tests
│  ├─ domain
│  └─ infrastructure
├─ tsconfig-build.json
└─ tsconfig.json

```

[Shopping-cart-api-app from Heroku Platform](https://shopping-cart-api-app.herokuapp.com/ "Heroku Project")

[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/hx94qo26egk/0.jpg)](https://drive.google.com/file/d/1gQksgB2oOBhhT2M9-7uDbGIt3-yPp76s/view)

