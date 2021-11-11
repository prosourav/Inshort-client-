import React, { useEffect, useState } from "react";
import { getNews } from "../../services/api";
import Article from "./Article.js";

const Articles = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    dailyNews();
  }, []);

  const dailyNews = async () => {
    let response = await getNews();
    setNews(response.data);
  };

  return (
    <div>
      {news.map((news) => {
        return <Article key={news._id} news={news} />;
      })}
    </div>
  );
};

export default Articles;
