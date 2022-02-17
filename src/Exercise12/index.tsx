/* 
Esercizio 12: A partire dalla REST API https://fakestoreapi.com/products, mostrare a schermo delle card per ogni singolo prodotto (typescript necessario, css non necessario). Tip: iniziare a modulare un minimo.
*/

import { useEffect, useState } from "react";
import { getAllProducts } from "./api";
import { Card } from "./Card";
import { Products } from "./model";

export const ExerciseTwelve = () => {
  const [products, setProducts] = useState<Products>([]);

  useEffect(() => {
    getAllProducts()
      .then((products) => setProducts(products))
      .catch(() => setProducts([]));
  }, []);

  if (!products.length) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {products.map((product, i) => (
        <Card key={i} product={product} />
      ))}
    </>
  );
};
