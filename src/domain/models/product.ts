export type ProductModel = {
  id: any | string | number;
  name: string;
  description: string;
  price: number;
  quantity: number;
};

export type ProductParams = Omit<ProductModel, "id" | "quantity">;
