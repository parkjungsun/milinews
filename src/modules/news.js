import * as newsApi from "../api/news";

const GET_NEWS = "GET_NEWS";
const GET_NEWS_ADD = "GET_NEWS_ADD";
const CLEAR_NEWS = "CLEAR_NEWS";

export const getNewsLoad = (search) => async (dispatch) => {
  const newsData = await newsApi.getNews(search);
  dispatch({ type: GET_NEWS, payload: newsData });
};

export const getNewsAdd = (search) => async (dispatch) => {
  const newsData = await newsApi.getNews(search);
  dispatch({ type: GET_NEWS_ADD, payload: newsData });
};

export const clearNews = () => ({ type: CLEAR_NEWS });

const initialState = [];

export default function news(state = initialState, action) {
  switch (action.type) {
    case GET_NEWS:
      return action.payload;
    case GET_NEWS_ADD:
      return state.concat(action.payload);
    case CLEAR_NEWS:
      return [];
    default:
      return state;
  }
}
