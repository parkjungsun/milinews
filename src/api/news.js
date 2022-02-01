import axios from "axios";

export const getNews = async (search) => {
  const headers = {
    "X-Naver-Client-Id": process.env.REACT_APP_NAVER_SEARCH_API_KEY_ID,
    "X-Naver-Client-Secret": process.env.REACT_APP_NAVER_SEARCH_API_KEY_SECRET,
  };

  const params = {
    query: search.keyword,
    display: "10",
    start: search.index * 10 + 1,
    sort: "date",
  };

  const newsData = await axios
    .get("/v1/search/news.json", { params, headers })
    .then((reponse) => {
      return reponse.data.items;
    })
    .catch((reponse) => console.log(reponse));

  return newsData;
};
