import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { getNews } from "../../services/api";
import Article from "./Article.js";

const Articles = () => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(0);

  console.log("news", news);

  useEffect(() => {
    dailyNews();
  }, [page]);

  const dailyNews = async () => {
    let response = await getNews(page);
    setNews([...news, ...response.data]);
  };

  return (
    <InfiniteScroll
      dataLength={news.length} //This is important field to render the next data
      next={() => setPage(page + 1)}
      hasMore={true}
    >
      {news.map((news) => {
        return <Article key={news._id} news={news} />;
      })}
    </InfiniteScroll>
  );
};

export default Articles;
