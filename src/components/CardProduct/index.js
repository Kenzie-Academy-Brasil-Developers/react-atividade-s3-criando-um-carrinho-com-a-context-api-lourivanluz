import { Button } from "../Button";
import { useState } from "react";
import { DivStyled } from "./styled";

export const CardProduct = ({ type, item }) => {
  const { price, img, id } = item;

  const [productName, setProductName] = useState(item.name);

  if (productName.length > 60) {
    setProductName(`${productName.substring(0, 57)}...`);
  }

  const formatCurrency = (Price, language, currencyType) => {
    const formatedCurrency = Number(Price).toLocaleString(language, {
      style: "currency",
      currency: currencyType,
    });
    return formatedCurrency;
  };

  const parcelPrice = (price, interest, parcel, callBackFormatCurrency) => {
    const _interest = (interest / 100) * price;
    const parcelPrice = (Number(price) + _interest) / parcel;
    const formatedParcelPrice = callBackFormatCurrency(
      parcelPrice,
      "pt-br",
      "BRL"
    );
    return formatedParcelPrice;
  };

  const parcel = 12;
  const formatedPrice = formatCurrency(price, "pt-br", "BRL");
  const formatedParcelPrice = parcelPrice(price, 2, parcel, formatCurrency);

  return (
    <>
      <DivStyled>
        <div className="imgContainer">
          <img src={img} alt="img" />
        </div>
        <h3>{productName}</h3>
        <div>
          <p>{`À vista por ${formatedPrice}`}</p>
          <p>{`ou até ${parcel}x de ${formatedParcelPrice}`}</p>
        </div>
        <Button type={type} item={item} />
      </DivStyled>
    </>
  );
};
