import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import axios from "axios";
import API_KEY from "./keys";
import NavContents from "./components/NavContents/NavContents";

function App() {
  const [category, setCategory] = useState("general");
  const [newsResults, setNewsResults] = useState();
  const [newsArray, setNewsArray] = useState([]);
  const [loadmore, setLoadmore] = useState(10);

  const newsApi = async () => {
    try {
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}&category=${category}&pageSize=${loadmore}`
      );
      console.log(news);
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    newsApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, loadmore, newsResults]);
  return (
    <div>
      <Nav setCategory={setCategory} category={category} />
      <NavContents
        newsArray={newsArray}
        newsResults={newsResults}
        loadmore={loadmore}
        setLoadmore={setLoadmore}
      />
    </div>
  );
}

export default App;
