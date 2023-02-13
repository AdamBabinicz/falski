import React from "react";
import styled from "styled-components";
import { useTheme } from "../../context/themeContext";
import { SectionLayout } from "../../styles/Layouts";
import Title from "../title/Title";
import {
  code,
  design,
  desktop,
  atlas,
  school,
  reads,
  reform,
} from "../../utils/Icons";
import ServiceItem from "../serviceitem/ServiceItem";

function Services() {
  const theme = useTheme();
  return (
    <ServicesStyled id="publikacje" theme={theme}>
      <Title
        name={"Publikacje"}
        desc={
          '"Ala ma kota" to z pewnością zdanie, które każdy automatycznie łączy z "Elementarzem" Mariana Falskiego, wydanym po raz pierwszy w 1910 roku. Nie wszyscy jednak wiedzą, że słynnego zdania w tym pierwszym wydaniu legendarnej książki wcale nie było.'
        }
      />
      <div className="services-con">
        <ServiceItem
          icon={atlas}
          title={"Atlas szkolnictwa średniego ogólnokształcącego"}
          bg={theme.colorPurple}
          shadow={theme.shadowPurple}
          desc={"(1932)"}
        />
        <ServiceItem
          icon={school}
          title={"Walczmy o szkołę"}
          bg={theme.colorGreen}
          shadow={theme.shadowPurple}
          desc={"(1936)"}
        />
        <ServiceItem
          icon={reads}
          title={"Dydaktyka nauki czytania i pisania"}
          bg={theme.colorPrimary}
          shadow={theme.shadowPurple}
          desc={"(1936)"}
        />
        <ServiceItem
          icon={reform}
          title={"Reforma nauczania w kl. I–IV "}
          bg={theme.colorGrey3}
          shadow={theme.shadowPurple}
          desc={"(1963)"}
        />
      </div>
    </ServicesStyled>
  );
}

const ServicesStyled = styled(SectionLayout)`
  background: ${(props) => props.theme.colorBgGrad};
  .services-con {
    margin-top: 3.5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, auto));
    grid-gap: 2rem;
  }
`;

export default Services;
