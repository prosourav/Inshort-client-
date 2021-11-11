import axios from "axios";

const url = "http://localhost:8000";

export const getNews = async () => {
  try {
    return await axios.get(`${url}/news`);
  } catch (error) {
    console.log("Got eror while calling NewsApi: ", error);
  }
};
