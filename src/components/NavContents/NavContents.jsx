import { Container } from "@material-ui/core";
import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NavContents.css";

function NavContents({ newsArray, newsResults, loadmore, setLoadmore }) {
  console.log(newsArray, newsResults);
  return (
    <Container>
      {newsArray.map((newsItem, index) => (
        <NewsCard newsItem={newsItem} key={index} />
      ))}
      <div>
        {loadmore <= newsResults && (
          <button
            onClick={() => setLoadmore(loadmore + 20)}
            className="load-btn"
          >
            Load More
          </button>
        )}
      </div>
    </Container>
  );
}

export default NavContents;
