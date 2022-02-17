import { Products } from "./model";

export const getAllProducts = () => {
  return fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((products) => products as Products);
};
