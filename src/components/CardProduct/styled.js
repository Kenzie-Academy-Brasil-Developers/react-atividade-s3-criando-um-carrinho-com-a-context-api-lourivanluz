import styled from "styled-components";
export const DivStyled = styled.div`
  width: 200px;
  height: 350px;
  padding: 20px 20px 35px 20px;
  background-color: white;
  margin: 15px;
  font-family: var(--fontMain);
  border-radius: 7px;
  box-shadow: 1px 1px 5px rgb(0, 0, 0, 0.5);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    width: 210px;
    height: 360px;
    margin: 10px;
    padding: 25px 25px 40px 25px;
  }

  .imgContainer {
    width: 100%;
    max-height: 200px;
    margin-bottom: 15px;
    img {
      width: 100%;
      max-height: 150px;
    }
  }
  h3 {
    font-weight: 600;
  }
  p {
    font-size: 13px;
    margin-top: 5px;
    span {
      font-size: 16px;
      display: block;
      text-align: right;
    }
  }
  button {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border: none;
    width: 100%;
    height: 30px;
    border-radius: 0 0 7px 7px;
    background-color: #1976d2;
    color: white;
    text-transform: uppercase;
  }
`;
