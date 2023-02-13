import uuid from "react-uuid";
import { eye, git, link } from "../utils/Icons";
import img1 from "../img/portImages/1.jpg";
import img2 from "../img/portImages/3.png";
import img3 from "../img/portImages/4.png";
import img4 from "../img/portImages/5.jpg";
import img5 from "../img/portImages/3.jpg";
import img6 from "../img/portImages/6.jpg";
import img7 from "../img/portImages/7.jpg";
import img8 from "../img/portImages/8.jpg";
import img9 from "../img/portImages/10.jpg";
import img10 from "../img/portImages/1.jfif";

export const portfolios = [
  {
    id: uuid(),
    category: "1910",
    title: "Nauka czytania i pisania dla dzieci ",
    image: img1,
    link1:
      "https://wielkahistoria.pl/elementarz-mariana-falskiego-niewygodne-fakty-o-jednej-z-najwazniejszych-polskich-ksiazek-xx-wieku",
    icon1: link,
  },
  {
    id: uuid(),
    category: "1922",
    title: "Elementarz powiastkowy dla młodzieży i dorosłych",
    image: img2,
    link1:
      "https://culture.pl/pl/artykul/marian-falski-autor-kultowego-elementarza-urodzil-sie-130-lat-temu",
    icon1: link,
  },
  {
    id: uuid(),
    category: "1922",
    title: "Elementarz powiastkowy dla żołnierzy",
    image: img3,
    link1:
      "https://instytutpolski.pl/minsk/pl/2020/12/10/marian-falski-tworca-ponadczasowego-elementarza",
    icon1: link,
  },
  {
    id: uuid(),
    category: "1947",
    title: "Elementarz dla I klasy szkół powszechnych",
    image: img9,
    link1:
      "https://kultura.onet.pl/wiadomosci/elementarze-z-lat-1910-1983-w-muzeum-oswiaty-w-kuznicy/27wdn11",
    icon1: link,
  },
  {
    id: uuid(),
    category: "1948",
    title: "Elementarz dla Szkół Miejskich",
    image: img7,
    link1:
      "https://zabawkator.pl/2015/07/26/elementarze-mariana-falskiego-unikat-z-lat-czterdziestych-wydany-w-londynie",
    icon1: link,
  },
  {
    id: uuid(),
    category: "1948",
    title: "Elementarz dla Szkół Wiejskich",
    image: img8,
    link1:
      "https://wiadomosci.onet.pl/kraj/marian-falski-historia-autora-slynnego-elementarza/33jle0c",
    icon1: link,
  },
  {
    id: uuid(),
    category: "1950",
    title: "Elementarz lata 50-te",
    image: img4,
    link1:
      "https://prenumeruj.forumakademickie.pl/fa/2019/10/tworca-elementarzy",
    icon1: link,
  },
  {
    id: uuid(),
    category: "1961",
    title: "Ćwiczenia elementarzowe: zeszyt I",
    image: img10,
    link1: "https://kurier-nakielski.pl/pan-od-elementarza-marian-falski",
    icon1: link,
  },
  {
    id: uuid(),
    category: "1971",
    title: "",
    image: img5,
    link1:
      "https://antyksobieski.pl/blog/marian-falski-i-jego-elementarz-wszechczasow-35",
    icon1: link,
  },
  {
    id: uuid(),
    category: "1974",
    title: "",
    image: img6,
    link1: "https://pl.wikipedia.org/wiki/Marian_Falski",
    icon1: link,
  },
];
