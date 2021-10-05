import styled from "styled-components";

export const DivStyled = styled.div`
  display: ${({ show = false }) => (show ? "flex" : "none")};
  width: 300px;
  flex-direction: column;
  border-radius: 7px;
  background-color: white;
  padding: 20px;
  position: absolute;
  top: -250px;
  right: 0;
  input {
    height: 30px;
    border-radius: 7px;
    margin-bottom: 5px;
    border: 1px solid lightgray;
    padding-left: 15px;
  }
  .botttons {
    display: flex;
    justify-content: space-between;
    margin: 5px 0;
    button {
      background-color: #1976d2;
      color: white;
      border-radius: 7px;
      border: none;
      padding: 5px 7px;
    }
  }
`;

export const DivPage = styled.div`
  padding: 20px;
  max-height: 100%;
`;

export const DivForm = styled.div`
  position: sticky;
  bottom: 0;
  display: flex;
  .addCatalogue {
    margin-left: auto;
  }
`;
