import React from "react";
import "./NewsCard.css";

function NewsCard({ newsItem }) {
  const fullDate = new Date(newsItem.publishedAt);
  var date = fullDate.toString().split(" ");
  const hour = parseInt(date[4].substring(0, 2));
  const time = hour > 12 ? true : false;
  console.log(hour);
  return (
    <div className="news-container">
      <div className="left-side">
        <img
          alt={newsItem.title}
          src={
            newsItem.urlToImage
              ? newsItem.urlToImage
              : "https://source.unsplash.com/random"
          }
          className="news-image"
        />
      </div>
      <div className="right-side">
        <div className="news-title">{newsItem.title}</div>
        <div>
          <span>
            <a
              href={newsItem.url}
              target="_blank"
              style={{
                textDecoration: "none",
                fontWeight: "bold",
                color: "black",
              }}
            >
              <b>short</b>{" "}
            </a>
          </span>
          <span className="muted">
            by {newsItem.author ? newsItem.author : "unknown"}/{" "}
            {time
              ? `${hour - 12}:${date[4].substring(3, 5)}pm`
              : `${hour}:${date[4].substring(3, 5)}am`}{" "}
            on {date[2]} {date[1]} {date[0]}
          </span>
        </div>
        <div>
          <div style={{ margin: "8px 0px" }}> {newsItem.description}</div>
          <span style={{ fontSize: "13px" }}>
            read more at{" "}
            <a
              href={newsItem.url}
              target="_blank"
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "bold",
                fontSize: "13px",
              }}
            >
              {newsItem.source.name}
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
