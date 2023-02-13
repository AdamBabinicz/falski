import uuid from "react-uuid";
import { user } from "../utils/Icons";
import blog1 from "../img/blogs/16.jpg";
import blog2 from "../img/blogs/3.jpg";
import blog3 from "../img/blogs/4.jpg";
import blog4 from "../img/blogs/7.jpg";
import blog5 from "../img/blogs/6.jpg";
import blog6 from "../img/blogs/11.jpg";
import img1 from "../img/blogs/1.webp";
import img2 from "../img/blogs/7.jpg";
import img3 from "../img/blogs/2.jpg";
import img4 from "../img/blogs/10.jpg";
import img5 from "../img/blogs/5.jpg";
import img6 from "../img/blogs/8.jpg";

export const blogs = [
  {
    id: uuid(),
    title: "Ala ma kota",
    title2:
      "'Ala ma kota' to z pewnością zdanie, które każdy automatycznie łączy z 'Elementarzem' Mariana Falskiego",
    desc: "Zdanie to pada dopiero w wydaniach z lat 30. W najwcześniejszej wersji Ala okazuje się właścicielką psa Asa i kota, nie wymienionego jednak z imienia. Co ciekawe zdanie to w swojej kanonicznej postaci wytrzymało tylko do 1949 roku, kiedy to 'Elementarz' został przystosowany do nowej powojennej rzeczywistości.",
    desc2:
      "Jest więc szczególnie uderzające, że zdanie symbolizujące elementarz w potocznej polszczyźnie w ogóle istniało w 'Elementarzu' jedynie od lat 30. do 1949.",
    date: "07.12.2011",
    image1: blog1,
    image2: img1,
    link: "https://culture.pl/pl/artykul/marian-falski-autor-kultowego-elementarza-urodzil-sie-130-lat-temu",
    writer: "Mikołaj Gliński",
    userIcon: user,
  },
  {
    id: uuid(),
    title: "Pan od elementarza i jego tajemnice",
    title2:
      "Nie da się w Polsce wskazać autora, który miałby więcej czytelników",
    desc: "Wielki Falski, że zaprosił wielkiego poetę do swojego „Elementarza”. Nie było tu jednak przypadku. Bo Marian Falski to nie była postać przypadkowa. PPS-owiec, mason, rewolucjonista roku 1905, więzień warszawskiej Cytadeli. Przyjaciel Stefanii Sempołowskiej. W II RP urzędnik wysokiego szczebla w Ministerstwie Oświecenia. Zaangażowany w sprawy szkolnictwa i jego upowszechniania chyba jeszcze mocniej niż w pisanie kolejnych wersji „Elementarza”. W Polsce Ludowej w Polskiej Akademii Nauk. Jeden z sygnatariuszy „Listu 34”.",
    desc2:
      "„Światopoglądowo należałem do lewicy Polskiej Partii Socjalistycznej, do tego jej odłamu, który po Pierwszej Wojnie Światowej i odzyskaniu Niepodległości nie przeszedł do Partii Komunistycznej i nie opuścił kraju w celu realizowania przewrotu socjalistycznego w ZSRR, ale nie włączył się też do PPS okresu międzywojennego w Polsce, której polityczna postawa wielu spośród nas nie zadowalała. Zdecydowałem się na pracę pozapartyjną na odcinku oświaty, licząc na swobodę wypowiadania się, postępowania w demokratycznym kraju, w zgodzie z własnym rozumieniem założeń polityki społecznej”.",
    date: "12.09.2020",
    image1: blog2,
    image2: img2,
    link: "https://wiadomosci.onet.pl/kraj/marian-falski-historia-autora-slynnego-elementarza/33jle0c",
    writer: "Robert Walenciak",
    userIcon: user,
  },
  {
    id: uuid(),
    title: "Co pamiętamy z Falskiego?",
    title2: "Elementarz Falskiego i garść wspomnień",
    desc: "Każdy z nas pamięta „Elementarz” Mariana Falskiego, pierwszą książkę w życiu każdego z nas z której uczyliśmy się czytać i na jej podstawie również pisać w naszym ojczystym języku. Książka ta kojarzy się nam z wieloma wspomnieniami z naszego dzieciństwa. Z pierwszymi wspaniałymi przyjaciółmi z tzw. „szkolnej ławki”. Z pierwszym pojmowaniem różnych pór roku, piękna naszej Ojczyzny i jej geografii, różnicy ludzkich zawodów i pracy na rzecz innych, życia rodzinnego itd.",
    desc2:
      " Mam w swoich zbiorach reprint elementarza z 1971 roku i czasem zaglądam do niego, gdyż wtedy napływa wiele fajnych wspomnień. Prawie każda jego strona wiąże się z jakimiś wspomnieniami. Dla mnie w większości są to wspomnienia pozytywne. Przywołujące w pamięci szczególnie pierwszą nauczycielkę i wychowawczynię szkolną panią Annę Wątrobową a także w szczególności moją troskliwą mamę, która codziennie pomagała mi odrabiać zadania z kaligrafii, czytania i liczenia.",
    date: "18.11.2021",
    image1: blog3,
    image2: img3,
    link: "http://pressmania.pl/elementarz-falskiego-i-garsc-wspomnien",
    writer: "Andrzej Kotowiecki",
    userIcon: user,
  },

  {
    id: uuid(),
    title: "Falski - rewolucjonista",
    title2:
      "Wziął udział w rewolucji 1905 roku jako jeden z przywódców PPS-owskiej młodzieży",
    desc: "W latach 1903-04 wraz z W. Iwanowskim i S. Boguszewskim zajmował się organizacją nielegalnej białoruskiej działalności wydawniczej w Krakowie. Pod pseudonimem Janka Swajak przetłumaczył na język białoruski „Janko-muzykant” H. Sienkiewicza, „Do swego Boga” S. Żeromskiego i opowiadanie nieznanego autora „Wiedźma”, przygotował także tekst anonimowego apelu „Carskie gospodarstwo”, wykorzystując do tego wydane w Londynie białoruskie broszury agitacyjne.",
    desc2:
      "Pod koniec 1904 r. wraz z W. Iwanowskim uczestniczył w pracy nad pierwszym „Elementarzem białoruskim”.",
    date: "08.12.2020",
    image1: blog4,
    image2: img4,
    link: "https://instytutpolski.pl/minsk/pl/2020/12/10/marian-falski-tworca-ponadczasowego-elementarza",
    writer: "Instytut Polski w Mińsku",
    userIcon: user,
  },
  {
    id: uuid(),
    title: "Muzeum Oświaty im. Mariana Falskiego",
    title2: "Mała wycieczka do Muzeum im. prof. Mariana Falskiego",
    desc: "We wrześniu zaprosimy Was, Drodzy Czytelnicy, na wystawę elementarzy z całego świata. Postanowiliśmy ją urządzić, kiedy dowiedzieliśmy się o istnieniu niezwykłego zbioru książeczek do nauki czytania. Kolekcjonowała je przez wiele lat nauczycielka ze Zduńskiej Woli Elżbieta Bartsch. Uzbierała ich kilkaset. Po jej przejściu na emeryturę część z nich kupiło Muzeum Oświaty im. Mariana Falskiego w Kuźnicy Grabowskiej.",
    desc2:
      "Muzeum Oświaty im. prof. Mariana Falskiego mieści się w kuźnickim dworku, należącym niegdyś do rodziny Oxnerów, którzy byli właścicielami tutejszych dóbr od końca XIX w. Skąd tu Falski? Otóż był zięciem Karola Oxnera – przedwojennego właściciela Kuźnicy Grabowskiej – a także szwagrem ostatniego dziedzica tego majątku – Seweryna Oxnera. Profesor często przyjeżdżał do rodziny swojej żony, polował w okolicznych lasach.  Samorząd gminy Kraszewice i mieszkańcy Kuźnic upamiętnili tę zasłużoną dla polskiej oświaty i kultury postać, powołując w 2004 r. do życia Muzeum Oświaty jego imienia.",
    date: "",
    image1: blog5,
    image2: img5,
    link: "https://www.wbp.wroc.pl/wbp/pl/katalogi-przeglad/1551-falski",
    writer: "Jacek Czarnik",
    userIcon: user,
  },
  {
    id: uuid(),
    title: "Protoplastka Ali z 'Elementarza'",
    title2:
      "Na międzynarodowej wystawie podręczników dla dzieci w Brukseli podręcznik Falskiego został uznany za jeden z najlepszych na świecie",
    desc: "W tym czasie Falski wstąpił w związek małżeński ze studentką matematyki w Zurychu Ireną Reginą Oxner, córką właściciela majątku ziemskiego w Kuźnicy Grabowskiej. Wybuch I wojny zastał Falskich w Zakopanem. Wyjechali do Wiednia i dopiero latem 1915 roku wrócili do Krakowa. Początkiem kariery naukowej Falskiego stało się obronienie przezeń rozprawy doktorskiej w 1917 roku na temat psychologii czytania. Wkrótce otrzymał także stypendium, które odbył w Genewie, a następnie w Wiedniu i Lipsku. Pod koniec 1918 roku, mimo propozycji objęcia katedry na Uniwersytecie Jagiellońskim, przeprowadził się do Warszawy. 1 stycznia 1919 roku rozpoczął pracę w Ministerstwie Wyznań Religijnych i Oświecenia Publicznego.",
    desc2:
      "Mimo iż „Elementarz” zmieniał się wielokrotnie, to zawsze jego główną bohaterką była Ala. Jej pierwowzorem była urodzona w 1922 roku Alina Margolis, z której mamą Marian Falski się przyjaźnił. Kiedy Ala skończyła siedem lat, Falski przyniósł jej w prezencie „Elementarz”, z dedykacją „Ali z Elementarza – Autor”; niżej dopisał: „Ala ma kota” (stąd to słynne zdanie, które automatycznie kojarzy się nam z „Elementarzem”). Zdanie to pojawiło się w kolejnych wersjach elementarza i widniało w nich od lat 30. do 1949.  A sama Ala została lekarką i działaczką społeczną, brała udział w powstaniu w getcie warszawskim, była żoną Marka Edelmana. Jest autorką książki „Ala z elementarza”, wspomnień z czasów dzieciństwa przed wojną i dorastania w jej trakcie. Zmarła w 2008 roku.",
    date: "",
    image1: blog6,
    image2: img6,
    link: "http://www.zsp.radwanice.pl/?page_id=9349",
    writer: "Zespół Szkolno-Przedszkolny w Radwanicach",
    userIcon: user,
  },
];

export default blogs;
