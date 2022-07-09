import styled from "styled-components";
import background from "./assets/background.svg";

export const Maintenance = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 1000px;
  background-image: url(${background});
  background-position: top;
  background-repeat: no-repeat;

  h1 {
    text-align: center;
    font-size: 7em;
    font-family: "Inter", sans-serif;
    color: #fff;

    @media (max-width: 390px) {
      & {
        font-size: 4.3em;
        margin-top: -50px;
        margin-bottom: 280px;
      }
    }
  }
  img {
    height: 40%;
  }
  .icons {
    display: flex;
    justify-content: center;
    margin: auto;
    width: 90%;
    margin-top: -50px;
    img {
      margin-right: 15px;
        height: 100%;
      cursor: pointer;
      @media (max-width: 390px) {
        & {
          margin-right: 4px;
        }  
    }
    @media(max-height: 740px){
      margin-top: -90px
    }
  }
`;
