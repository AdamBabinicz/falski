import React, { useState } from "react";
import styled from "styled-components";
import { useTheme } from "../../context/themeContext";
import { arrow } from "../../utils/Icons";
import Button from "../button/Button";
import img from "../../img/5.jpg";
import img1 from "../../img/11.png";

function Subscribe() {
  const theme = useTheme();

  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <SubscribeStyled theme={theme}>
      <h4>
        W 2017 roku małżeństwo Falskich otrzymało tytuł Sprawiedliwy wśród
        Narodów Świata przyznawany przez izraelski Instytut Yad Vashem za
        bezinteresowną pomoc okazaną Żydom podczas II wojny światowej.
      </h4>
      <img src={img} alt="..." />
      <div className="btn-con">
        <button onClick={() => toggleTab(1)}>
          <Button
            name="Czytaj"
            blob="blob"
            bg={theme.colorBlack}
            color={theme.colorWhite}
            bFw={"600"}
            onClick="onClick"
            bRad={"10px"}
            bPad={theme.bPad1}
            icon={arrow}
          />
        </button>

        <div
          className={
            toggleState === 1
              ? "services__modal active-modal"
              : "services__modal"
          }
        >
          <div className="services__modal-content">
            <i
              onClick={() => toggleTab(0)}
              className="uil uil-times services__modal-close"
            ></i>
            <h3 className="services__modal-title">"Falski pomaga Żydom"</h3>
            <p className="services__modal-description">
              Przyjaciel Ludwika Krzywickiego; w czasie okupacji pomaga synowej
              Ludwika, znanej publicystce żydowskiego pochodzenia, Irenie
              Krzywickiej. Pomaga jej zorganizować aryjskie papiery, znajduje
              bezpieczny dom na Sadybie, gdzie Krzywicka mieszka z rodziną do
              upadku powstania sierpniowego.
            </p>
            <div className="services__modal-services">
              <img src={img1} alt="..." />
            </div>
          </div>
        </div>
      </div>
    </SubscribeStyled>
  );
}

const SubscribeStyled = styled.div`
  background: ${(props) => props.theme.colorPurple};
  padding-top: 5rem;
  padding-bottom: 5rem;
  padding-left: 18rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, auto));
  gap: 2rem;

  img {
    width: 100%;
    /* height: 500px;
    object-fit: cover; */
  }
  @media screen and (max-width: 1600px) {
    padding: 4rem 10rem;
  }
  @media screen and (max-width: 1150px) {
    padding: 2rem 6rem;
  }
  @media screen and (max-width: 650px) {
    padding: 2rem 3rem;
    grid-template-columns: 1fr;
    height: fit-content;
  }
  h4 {
    font-size: clamp(1.1rem, 3vw, 1.5rem);
  }
  .btn-con {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export default Subscribe;
