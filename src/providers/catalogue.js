import { createContext, useState } from "react";
import { PRODUCT_DB } from "../ProductDB";

export const CatalogueContext = createContext([]);

export const CatalogueProvider = ({ children }) => {
  const [catalogue, setCatalogue] = useState(PRODUCT_DB);

  const addToCatalogue = (item) => {
    setCatalogue([...catalogue, item]);
  };

  const rmvToCatalogue = (name) => {
    const filtred = catalogue.filter((item) => item.name !== name);
    setCatalogue(filtred);
  };

  return (
    <CatalogueContext.Provider
      value={{ catalogue, addToCatalogue, rmvToCatalogue }}
    >
      {children}
    </CatalogueContext.Provider>
  );
};
