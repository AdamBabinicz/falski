import React, { useState } from "react";
import styled from "styled-components";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import About from "./components/sections/About";
import Blogs from "./components/sections/Blogs";
import Contact from "./components/sections/Contact";
import Experience from "./components/sections/Experience";
import Portfolios from "./components/sections/Portfolios";
import Services from "./components/sections/Services";
import { useTheme } from "./context/themeContext";

function App() {
  const theme = useTheme();

  //state
  const [toggle, setToggle] = useState(false);

  return (
    <AppStyled theme={theme}>
      <Navigation toggle={toggle} />
      <Header toggle={toggle} setToggle={setToggle} />
      <main>
        <About />
        <Services />
        <Experience />
        <Portfolios />
        <Blogs />
        <Contact />
      </main>
      <footer>
        <p>Radom 2023 - {new Date().getFullYear()}.</p>
      </footer>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  min-height: 100vh;
  background: ${(props) => props.theme.colorBg};
  color: ${(props) => props.theme.colorWhite};
  position: relative;

  p,
  a,
  li {
    color: ${(props) => props.theme.colorGrey1};
  }
  p {
    line-height: 1.9rem;
  }
  footer {
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colorBg2};
    p {
      a {
        color: ${(props) => props.theme.colorPrimary};
        transition: all 0.3s ease-in-out;
        &:hover {
          color: ${(props) => props.theme.colorGreen};
        }
      }
    }
  }
`;

export default App;
