import styled from "styled-components";
import background from "./assets/background.svg";

export const Maintenance = styled.main`
  display: flex;
  align-itens: center;
  background-image: url(${background});
  height: 1000px;
  width: 100%;
`;

export const ContainerMain = styled.div`
  height: 60%;
  margin: auto;
  text-align: center;
  color: #fff;
`;

export const Icons = styled.div`
  img {
    margin: 10px;
    cursor: pointer;
  }
`;
