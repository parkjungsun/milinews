import { combineReducers } from "redux";
import news from "./news";
import newsSearch, { newsSearchSaga } from "./newsSearch";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({
  news,
  newsSearch,
});

export function* rootSaga() {
  yield all([newsSearchSaga()]);
}

export default rootReducer;
