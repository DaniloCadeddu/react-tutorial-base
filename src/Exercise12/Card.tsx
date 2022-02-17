import { Product } from "./model";

interface Props {
  product: Product;
}

export const Card = ({
  product: { description, image, title, price },
}: Props) => (
  <div>
    <h1>{title}</h1>
    <div>{description}</div>
    <img src={image} alt="" />
    <p>{price}</p>
  </div>
);
