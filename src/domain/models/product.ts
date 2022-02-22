export type ProductModel = {
  id: string | number;
  name: string;
  description: string;
  price: number;
};

export type ProductParams = Omit<ProductModel, "id">;

