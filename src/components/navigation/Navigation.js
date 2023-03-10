import React, { useState } from "react";
import styled from "styled-components";
import { useTheme } from "../../context/themeContext";

function Navigation({ toggle }) {
  const theme = useTheme();

  const [open, setOpen] = useState(false);

  return (
    <NavigationStyled toggle={toggle} theme={theme}>
      <ul className={open ? "nav-items exp" : "nav-items"}>
        <li className="nav-item">
          <a href="/#">Start</a>
        </li>
        <li className="nav-item">
          <a href="#falski" onClick={() => setOpen(!open)}>
            M.&nbsp;Falski
          </a>
        </li>
        <li className="nav-item">
          <a href="#publikacje">Publikacje</a>
        </li>
        <li className="nav-item">
          <a href="#życiorys">Życiorys</a>
        </li>
        <li className="nav-item">
          <a href="#elementarze">Elementarze</a>
        </li>
        <li className="nav-item">
          <a href="#blog">Blog</a>
        </li>
        <li className="nav-item">
          <a href="#kontakt">Kontakt</a>
        </li>
      </ul>
    </NavigationStyled>
  );
}

const NavigationStyled = styled.nav`
  position: fixed;
  transition: all 0.3s ease-in-out;
  left: 50%;
  top: 0;
  background: red;
  min-height: 10vh;
  transform: translateX(-50%)
    translateY(${(props) => (props.toggle ? "-100%" : 0)})
    scaleX(${(props) => (props.toggle ? "0" : "1")});
  filter: blur(${(props) => (props.toggle ? "20px" : "0")});
  opacity: ${(props) => (props.toggle ? "0" : "1")};
  border-radius: ${(props) => (props.toggle ? "10px" : "0")};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 850px;
  background: ${(props) => props.theme.colorBg2};
  margin: 0 auto;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  z-index: 12;
  @media screen and (max-width: 850px) {
    width: 100%;
    border-radius: 0;
    bottom: 0;
    height: 10vh;
    top: auto;
    left: 0;
    transform: ${(props) =>
      props.toggle ? "translateY(100%)" : "translateY(0)"};
  }
  .nav-items {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 768px) {
      justify-content: center;
      flex-wrap: wrap;
      gap: 1rem;
      padding: 1rem 2rem;
      height: max-content;
      padding-bottom: 2rem;
      margin-bottom: 2rem;
      width: 100%;
      background: ${(props) => props.theme.colorBg2};
    }

    li {
      @media only screen and (max-width: 768px) {
        margin: 0;
      }
      a {
        padding: 0.6rem 0.3rem;
        position: relative;
        transition: all 0.4s ease-in-out;
        color: ${(props) => props.theme.colorWhite};
        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 2px;
          background: ${(props) => props.theme.colorPrimary};
          transition: all 0.4s ease-in-out;
        }
        &:hover:after {
          width: 100%;
        }
      }
    }
  }
`;

export default Navigation;
