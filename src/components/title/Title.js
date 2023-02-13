import React from "react";
import styled from "styled-components";
import { useTheme } from "../../context/themeContext";

function Title({ name, desc }) {
  const theme = useTheme();
  return (
    <TitleStyled theme={theme}>
      <h2>{name}</h2>
      <p>{desc}</p>
    </TitleStyled>
  );
}

const TitleStyled = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: clamp(1.6rem, 8vw, 2rem);
    font-weight: 700;
    line-height: 1.5;
  }
  p {
  }
`;

export default Title;
