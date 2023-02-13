import React from "react";
import styled from "styled-components";
import { useTheme } from "../../context/themeContext";
import { SectionLayout } from "../../styles/Layouts";
import Timeline from "../timeline/Timeline";
import Title from "../title/Title";

function Experience() {
  const theme = useTheme();
  return (
    <ExperienceStyled id="życiorys" theme={theme}>
      <Title
        name={"Życiorys"}
        desc={
          "polski pedagog i działacz oświatowy, specjalista w dziedzinie ustroju i organizacji szkolnictwa, autor najpopularniejszego polskiego elementarza – elementarza Falskiego."
        }
      />
      <div className="timeline-con">
        <Timeline />
      </div>
    </ExperienceStyled>
  );
}

const ExperienceStyled = styled(SectionLayout)`
  .timeline-con {
    margin-top: 3.5rem;
  }
`;

export default Experience;
