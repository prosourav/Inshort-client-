import axios from "axios";

const url = "http://localhost:8000";

export const getNews = async (page, size = 5) => {
  console.log("api page", size);
  console.log("api page", page);
  try {
    return await axios.get(`${url}/news?page=${page}&size=${size}`);
  } catch (error) {
    console.log("Got eror while calling NewsApi: ", error);
  }
};

//
