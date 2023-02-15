import React, { useState } from "react";
import styled from "styled-components";
import { useTheme } from "../../context/themeContext";
import { SectionLayout } from "../../styles/Layouts";
import about from "../../img/4.jpg";
import Title from "../title/Title";
import Button from "../button/Button";
import {
  brief,
  download,
  flame,
  medal,
  mug,
  jew,
  smile,
  more,
} from "../../utils/Icons";
// import Progressbar from "../progressbar/Progressbar";
import Stats from "../stats/Stats";
import shape1 from "../../img/2.png";
import shape2 from "../../img/5.png";
import img from "../../img/17.jpg";

function About() {
  const theme = useTheme();

  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <AboutStyled id="falski" theme={theme}>
      <div className="about-info">
        <div className="about-image">
          <img src={about} alt="..." />
        </div>
        <div className="about-content">
          <Title name={"Twórca ponadczasowego elementarza"} />
          <p>
            Na opracowanym przez niego elementarzu czytać i&nbsp;pisać nauczyło
            się wiele pokoleń Polaków. To on jest także autorem jednego
            z&nbsp;pierwszych zdań czytanych przez Polaków: "Ala ma kota".
          </p>
          <p>
            "Elementarz" doczekał się kilkunastu wznowień zdobionych pięknymi
            ilustracjami. Kolejne wersje "Elementarza" były wydawane
            w&nbsp;Polsce jeszcze w&nbsp;latach 70. - Jest to dość wyjątkowe
            zjawisko w&nbsp;karierze podręczników szkolnych. Na świecie żaden
            inny podręcznik szkolny nie doczekał się tylu wydań – powiedział
            prof. Ryszard Wroczyński.
          </p>

          <div className="btn-con">
            <div onClick={() => toggleTab(1)}>
              <Button
                name="Więcej"
                blob="blob"
                icon={more}
                bg={theme.colorPrimary}
                color={theme.colorWhite}
                bFw={"600"}
                onClick="onClick"
                bRad={"30px"}
                bPad={theme.bPad1}
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
                <h3 className="services__modal-title">
                  "Muzeum Oświaty im. prof. M. Falskiego"
                </h3>
                <p className="services__modal-description">
                  W niewielkim dworku Oxnerów w Kuźnicy Grabowskiej znajduje się
                  klimatyczne Muzeum Oświaty. Dworek należał do teściów
                  profesora, który był tu częstym gościem. W jednej z sal
                  muzealnych urządzono klasę lekcyjną z lat 50. XX w. Można
                  usiąść w ławkach i wspominać lata dzieciństwa. Wystroju
                  dopełniają szkolne fartuszki z tamtego okresu, kałamarze,
                  elementarze, zeszyty itd. Ciekawy jest zbiór czasopism dla
                  dzieci ("Miś", "Świerszczyk", "Płomyczek" i inne) oraz
                  elementarzy z całego świata.
                </p>
                <div className="services__modal-services">
                  <img src={img} alt="..." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="stats-container">
        <Stats icon={medal} number="1937" desc="Złoty Krzyż Zasługi" />
        <Stats
          icon={brief}
          number="1956"
          desc="Order Sztandaru Pracy II klasy"
        />
        <Stats icon={smile} number="od 1968" desc="Order Uśmiechu" />
        <Stats
          icon={jew}
          number="2017"
          desc="Sprawiedliwy wśród Narodów Świata"
        />
      </div>
      <img src={shape1} alt="..." className="shape1" />
      <img src={shape2} alt="..." className="shape2" />
    </AboutStyled>
  );
}

const AboutStyled = styled(SectionLayout)`
  background: ${(props) => props.theme.aboutBg};
  position: relative;
  overflow: hidden;

  .stats-container {
    padding-top: 2rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .about-info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    position: relative;
    z-index: 1;

    @media screen and (max-width: 1150px) {
      grid-template-columns: 1fr;
    }

    .about-image {
      padding: 1.5rem;
      background: ${(props) => props.theme.colorBg3};
      border-radius: 5px;
      width: 80%;

      @media screen and (max-width: 1150px) {
        width: 100%;
      }

      img {
        width: 100%;
      }
    }

    .about-content {
      .progress-bars {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        margin-top: 1.5rem;
      }
      .btn-con {
        margin-top: 2rem;

        @media screen and (max-width: 1150px) {
          margin-bottom: 2rem;
        }
      }
    }
  }
  .shape1 {
    position: absolute;
    left: -7px;
    top: -7px;
    z-index: 1;
    opacity: 0.05;
    pointer-events: none;
  }
  .shape2 {
    position: absolute;
    right: -7px;
    top: -7px;
    z-index: 1;
    opacity: 0.05;
    pointer-events: none;
  }
`;

export default About;

// https://culture.pl/pl/artykul/marian-falski-autor-kultowego-elementarza-urodzil-sie-130-lat-temu

// https://wiadomosci.onet.pl/kraj/marian-falski-historia-autora-slynnego-elementarza/33jle0c
