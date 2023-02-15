import React, { useState } from "react";
import styled from "styled-components";
import { useTheme } from "../../context/themeContext";
import Button from "../button/Button";
import { read } from "../../utils/Icons";
import avatar from "../../img/0001.png";
import line from "../../img/6.png";
import Particle from "../Particle";
import img from "../../img/16.jpg";

function Header({ toggle, setToggle }) {
  const theme = useTheme();

  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <HeaderStyled theme={theme} id="/">
      <div className="particles-con">
        <Particle />
      </div>
      <div
        className="burger-menu"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
      </div>
      <div className="left-header">
        <div className="left-h-content">
          <h1>książka,</h1>
          <p className="profession">która mną wstrząsnęła!</p>
          <p className="description">
            To była jedna z pierwszych książek, którą w wieku 6&nbsp;lat wziąłem
            do ręki;
            <p>
              po jej obejrzeniu nie byłem już tym samym dzieckiem, co wcześniej;
            </p>
            <p>jej piętno czuję na sobie do dzisiaj!</p>
          </p>
          <div className="btn-con">
            <div onClick={() => toggleTab(1)}>
              <Button
                name={"Czytaj"}
                blob={"blob"}
                bg={theme.colorPrimary}
                color={theme.colorWhite}
                bFw={"600"}
                bRad={"30px"}
                bPad={theme.bPad1}
                icon={read}
              />
            </div>

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
                <h3 className="services__modal-title">"Upamiętnienie"</h3>
                <p className="services__modal-description">
                  W dzieje Kuźnicy Grabowskiej na stałe wpisane zostały rody
                  Oxnerów i Falskich. Profesor Marian Falski przyjeżdżał tutaj z
                  żoną Ireną do dworku swych teściów Oxnerów na wakacyjny
                  wypoczynek. Wiadomo też z rodzinnych przekazów i zachowanych
                  pamiętnikarskich zapisków M. Falskiego, że pewne elementy
                  jednego z pierwszych „Elementarzy” pisał właśnie w Kuźnicy
                  Grabowskiej.
                </p>
                <div className="services__modal-services">
                  <img src={img} alt="..." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-header"></div>
      <div className="image-con">
        <img src={avatar} alt="..." />
      </div>
      <div className="image-overlay"></div>
      <img src={line} alt="..." className="image-line" />
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  position: relative;
  overflow: hidden;
  height: 100vh;
  padding: 1rem 18rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 1600px) {
    padding: 1rem 10rem;
  }

  @media screen and (max-width: 1150px) {
    padding: 1rem 6rem;
  }

  @media screen and (max-width: 1060px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .particles-con {
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
  }
  .burger-menu {
    position: fixed;
    top: 2rem;
    right: 3rem;
    display: flex;
    flex-direction: column;
    z-index: 15;
    cursor: pointer;
    .line {
      width: 35px;
      height: 4px;
      background: ${(props) => props.theme.colorPrimary};
      margin-bottom: 5px;
      border-radius: 7px;
      transition: all 0.3s ease-in-out;
      display: flex;
      box-shadow: 0 3px 5px rgba(0, 0, 0, 0.5);
      &:last-child {
        margin-bottom: 0;
        width: 20px;
        align-self: flex-end;
      }
    }
    &:hover {
      .line:last-child {
        width: 35px;
      }
    }
  }
  .left-header {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    z-index: 2;

    @media screen and (max-width: 1060px) {
      .left-h-content {
        /* margin-top: -15rem; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* align-items: center; */
      }
      p {
        /* text-align: center; */
      }
      .profession {
        margin-top: 1rem;
      }
    }
  }

  h2 {
    font-size: 3.5rem;
    font-weight: 700;
    color: ${(props) => props.theme.colorPurple};
    text-transform: uppercase;
    line-height: 1;

    span {
      color: ${(props) => props.theme.colorPrimary};
    }
  }
  h1 {
    font-size: clamp(3.5rem, 5vh, 6rem);
  }
  .profession {
    font-size: 2rem;
    font-weight: 500;
    color: ${(props) => props.theme.colorPrimary};
  }
  .description {
    margin-top: 1rem;
    color: ${(props) => props.theme.colorGrey1};
    margin-bottom: 2rem;
    line-height: 2rem;
  }

  .image-con {
    position: absolute;
    right: 15%;
    bottom: 8%;

    @media screen and (max-width: 1060px) {
      display: none;
    }

    img {
      width: 600px;
      height: 100%;
      object-fit: contain;
      filter: grayscale(100%) drop-shadow(5px -5px 20px rgba(0, 0, 0, 0.65));
    }
  }
  .image-overlay {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.colorBg};
    z-index: 1;
    opacity: 0.3;

    @media screen and (max-width: 1060px) {
      display: none;
    }
  }
  .image-line {
    position: absolute;
    right: 0;
    top: -15%;
    width: 105%;
    z-index: -1;

    @media screen and (max-width: 1060px) {
      display: none;
    }
  }
`;

export default Header;
