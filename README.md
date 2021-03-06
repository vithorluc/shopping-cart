# shopping-cart

## Project Tree of achitecture 
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

# Entities

## Users 
| METHOD | ROUTE | DESCRIPTION | 
| --- | --- | --- |
| POST | api/v1/users | Get an user |


## Products
| METHOD | ROUTE | DESCRIPTION | 
| --- | --- | --- |
| GET | api/v1/products/:id | Get a product |
| POST | api/v1/products | Create a product |
| PUT | api/v1/products/:id | Update a product |
| DELETE | api/v1/products/:id | Delete a product |
| GET | api/v1/products | Get all products |


## Carts
| METHOD | ROUTE | DESCRIPTION | 
| --- | --- | --- |
| GET | api/v1/carts/:user_id | Get a cart |
| POST | api/v1/carts | Create a cart |
| PUT | api/v1/carts/:id | Update a cart |


## Project Clean Achitecture Based
- Clean architecture is a staple of the modern app development space. Particularly popular for Java and Android developers, this architecture is designed to make it easier to create stable apps even when outer elements such as UI, databases, or external APIs are always changing.

## Project API access link 
[Shopping-cart-api-app from Heroku Platform](https://shopping-cart-api-app.herokuapp.com/ "Heroku Project")

## Project explanation video 
[![API video explanation](http://img.youtube.com/vi/hx94qo26egk/0.jpg)](https://drive.google.com/file/d/1gQksgB2oOBhhT2M9-7uDbGIt3-yPp76s/view)

