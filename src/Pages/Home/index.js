import { Catalogue } from "../../components/catalogue";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { Button } from "../../components/Button";
import { DivPage, DivStyled, DivForm } from "./style";

export const HomePage = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImg, setProductImg] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [showform, setShowForm] = useState(false);

  return (
    <DivPage>
      <Catalogue />

      <DivForm>
        <Fab onClick={() => setShowForm(!showform)} className="addCatalogue">
          <AddIcon />
        </Fab>

        <DivStyled className="catalogueForm" show={showform}>
          <input
            type="text"
            value={productName}
            placeholder="Nome do produto"
            onChange={(event) => setProductName(event.target.value)}
          />
          <input
            type="text"
            value={productPrice}
            placeholder="preço"
            onChange={(event) => setProductPrice(event.target.value)}
          />
          <input
            type="text"
            value={productImg}
            placeholder="url da imagem"
            onChange={(event) => setProductImg(event.target.value)}
          />
          <textarea
            value={productDescription}
            placeholder="Descrição do produto"
            onChange={(event) => setProductDescription(event.target.value)}
          />

          <div className="botttons">
            <Button
              type="addCatalogue"
              item={{
                name: productName,
                price: Number(productPrice),
                img: productImg,
                description: productDescription,
              }}
            />
            <Button type="rmvCatalogue" item={{ name: productName }} />
          </div>
        </DivStyled>
      </DivForm>
    </DivPage>
  );
};
