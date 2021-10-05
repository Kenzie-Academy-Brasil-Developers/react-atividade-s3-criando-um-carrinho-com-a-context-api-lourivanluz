import { useContext } from "react";
import { CartContext } from "../../providers/cart";
import { CatalogueContext } from "../../providers/catalogue";
import { Button } from "../Button";
import { CardProduct } from "../CardProduct";
import { UlStyled } from "./sytle";

export const ListProduct = ({ type }) => {
  const { catalogue } = useContext(CatalogueContext);
  const { cartList } = useContext(CartContext);

  return (
    <div>
      <UlStyled>
        {type === "catalogue" &&
          catalogue.map((item, index) => (
            <li key={index}>
              <CardProduct type={type} item={item} />
            </li>
          ))}
        {type === "cart" &&
          cartList.map((item, index) => (
            <li key={index}>
              <CardProduct type={type} item={item} />
            </li>
          ))}
      </UlStyled>
    </div>
  );
};
