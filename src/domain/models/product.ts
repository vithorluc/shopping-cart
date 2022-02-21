export type ProductModel = {
  id: string | number;
  name: string;
  description: string;
  price: number;
};

export type AddProductParams = Omit<ProductModel, "id">;
