import { useContext } from "react";
import { CartContext } from "../../providers/cart";
import { CatalogueContext } from "../../providers/catalogue";

export const Button = ({ type, item }) => {
  const { addToCart, rmvToCart } = useContext(CartContext);
  const { addToCatalogue, rmvToCatalogue } = useContext(CatalogueContext);

  const text =
    type === "catalogue"
      ? "Comprar"
      : type === "cart"
      ? "Remover"
      : type === "addCatalogue"
      ? "Adicionar no Catalogo"
      : type === "rmvCatalogue"
      ? "Remover do Catalogo"
      : null;

  const handleClick = () => {
    if (type === "catalogue") addToCart(item);
    if (type === "cart") rmvToCart(item.name);
    if (type === "addCatalogue") addToCatalogue(item);
    if (type === "rmvCatalogue") rmvToCatalogue(item.name);
  };

  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  );
};
