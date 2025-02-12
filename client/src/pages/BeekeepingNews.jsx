import { useState, useEffect } from "react";
import styled from "styled-components";
import { getBeekeepingNews } from '../helper';
import SearchBar from "../components/SearchBar";
import { StyledContainer } from '../MiscStyling';
import MotionWrapper from "../styles/MotionWrapper";

const ArticleContainer = styled.div`
  width: 100%;
  box-sizing: border-box;

  a {
    color: var(--bright-blue);
  }

  article {
    width: 100%;
  }
`;

const BeekeepingNews = () => {
  const [articles, setArticles] = useState([]);
  const [queryApplied, setQueryApplied] = useState('');

  const pullFromSearch = (searchQuery) => {
    getBeekeepingNews(searchQuery).then(json => {
      setArticles(json.items);
      setQueryApplied(searchQuery);
    });
  };

  useEffect(() => {
    pullFromSearch('');
  }, []);

  return (
    <StyledContainer>
      <h1>Recent Beekeeping News</h1>
      <h3>. . . . . </h3>
      <SearchBar pullFromSearch={pullFromSearch} />
      {queryApplied && <h3>Results for {queryApplied}</h3>}
      <br />
      <ArticleContainer>
        {articles.map((article, index) => (
          <MotionWrapper index={index} key={article.link}>
            <article>
              <a href={article.link} target='_blank'>{article.title}</a>
              <p>{article.snippet}</p>
              <hr />
            </article>
            </MotionWrapper>
        ))}
      </ArticleContainer>
    </StyledContainer>
  );
};

export default BeekeepingNews;