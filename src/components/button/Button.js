import React from "react";
import styled from "styled-components";
import { useTheme } from "../../context/themeContext";

function Button({ name, blob, icon, color, bg, bFw, bRad, bPad }) {
  const theme = useTheme();

  return (
    <ButtonStyled
      style={{
        backgroundColor: bg,
        color: color,
        borderRadius: bRad,
        padding: bPad,
        fontWeight: bFw,
      }}
      theme={theme}
    >
      {name}
      {icon}
      <div className={blob}></div>
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  overflow: hidden;

  i {
    margin-left: 0.6rem;
  }
`;

export default Button;
