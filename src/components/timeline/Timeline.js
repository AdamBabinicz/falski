import React from "react";
import styled from "styled-components";
import { useTheme } from "../../context/themeContext";
import { brief, education } from "../../utils/Icons";
import TimelineItem from "../timelineitem/TimelineItem";

function Timeline() {
  const theme = useTheme();
  return (
    <TimelineStyled theme={theme}>
      <div className="education-timeline timeline">
        <TimelineItem
          duration={"ur. 7 grudnia 1881"}
          title={"Nacza ok. Słuczy - Kresy"}
          desc={
            "Pochodził z drobnoszlacheckiej rodziny. Do szkoły uczęszczał w Mińsku od 1891. Studia podjął na Cesarskim Uniwersytecie Warszawskim – w Instytucie Politechnicznym uzyskując stopień inżyniera. "
          }
          icon={education}
        />
        <TimelineItem
          duration={"1903 - 1914"}
          title={"Działalność w PPS-Lewica"}
          desc={
            "W 1903 wstąpił do PPS, prowadził w Warszawie koła uczniowskie i współpracował z konspiracyjnym Kołem Wychowawców. Z ramienia PPS brał udział w organizowaniu i prowadzeniu strajku szkolnego. W 1907 osadzony w Cytadeli za spiskowanie przeciwko caratowi, następnie wydalony z granic Rosji."
          }
          icon={education}
        />
        <TimelineItem
          duration={"1919 - 1939"}
          title={"Lata przed II W.Ś."}
          desc={
            "Pracował w Ministerstwie Wyznań Religijnych i Oświecenia Publicznego. Był przeciwnikiem tzw. reformy jędrzejewiczowskiej krytykując utrudniony dostęp młodzieży biednej do szkolnictwa średniego i wyższego. Był ekspertem Ligi Narodów ds. reorganizacji oświaty w Chinach w 1931. Czynnie współpracował z ZNP, gdzie wygłaszał referaty i prelekcje."
          }
          icon={education}
        />
      </div>
      <div className="jobs-timeline timeline">
        <TimelineItem
          duration={"1939 - 1945"}
          title={"Lata okupacji niemieckiej"}
          desc={
            "Podczas okupacji pracował w Warszawie nad dydaktyką początkowego nauczania i planami odbudowy i przebudowy szkolnictwa po wojnie.."
          }
          icon={brief}
        />
        <TimelineItem
          duration={"1945 - 1964"}
          title={"Działalność w PRL"}
          desc={
            "W 1945 r. przystąpił do organizowania Wydziału Statystycznego, przemianowanego potem na Biuro Badań i Statystyki Ministerstwa Oświaty (kierował nim do 1950). W 1954 objął profesurę w Polskiej Akademii Nauk, a od 1958 został kierownikiem Pracowni Ustroju i Organizacji Oświaty PAN. W 1964 podpisał wraz z Antonim Słonimskim List 34 przeciwko cenzurze i ograniczeniu dostępu do kultury.."
          }
          icon={brief}
        />
        <TimelineItem
          duration={"zm. 8 października 1974"}
          title={"Warszawa"}
          desc={
            "Pochowany na Cmentarzu Wojskowym na Powązkach w Warszawie (kwatera A32-2-6)."
          }
          icon={brief}
        />
      </div>
    </TimelineStyled>
  );
}

const TimelineStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, auto));
  gap: 2rem;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  .timeline {
    background: ${(props) => props.theme.colorBg5};
    /* padding: 2rem; */
    border-radius: 10px;
  }

  .jobs-timeline {
    .icon {
      left: -10px;
    }
  }
`;

export default Timeline;
