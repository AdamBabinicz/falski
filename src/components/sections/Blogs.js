import React from "react";
import styled from "styled-components";
import { useTheme } from "../../context/themeContext";
import { SectionLayout } from "../../styles/Layouts";
import Title from "../title/Title";
import blogs from "../../data/blogs";
import BlogItem from "../blogitem/BlogItem";

function Blogs() {
  const theme = useTheme();
  return (
    <BlogsStyled id="blog" theme={theme}>
      <div className="center-title">
        <Title
          name={"Ciekawostki"}
          desc={`Uczęszczał do szkoły powszechnej i gimnazjum w Mińsku. Na początku XX wieku podjął studia na Politechnice Warszawskiej. Podczas studiów związał się z ruchem niepodległościowym i konspiracyjnymi kręgami oświatowymi. Wziął udział w rewolucji 1905 roku jako jeden z przywódców PPS-owskiej młodzieży.`}
        />
      </div>
      <div className="blogs-con">
        {blogs.map((blog) => {
          return <BlogItem {...blog} />;
        })}
      </div>
    </BlogsStyled>
  );
}

const BlogsStyled = styled(SectionLayout)`
  background: ${(props) => props.theme.colorBg5};
  padding-bottom: 360px;

  .center-title {
    @media only screen and (max-width: 767px) {
      width: 100%;
      text-align: left;
    }
  }
  .blogs-con {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, auto));
    gap: 2rem;
    margin-top: 3.5rem;

    @media only screen and (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }
`;

export default Blogs;
