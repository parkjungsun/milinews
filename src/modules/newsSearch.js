import { delay, put, takeLatest } from "redux-saga/effects";

const PREV_NEWS_PAGE = "PREV_NEWS_PAGE";
const NEXT_NEWS_PAGE = "NEXT_NEWS_PAGE";
const CHANGE_KEYWORD = "CHANGE_KEYWORD";
const PREV_NEWS_PAGE_ASYNC = "PREV_NEWS_PAGE_ASYNC";
const NEXT_NEWS_PAGE_ASYNC = "NEXT_NEWS_PAGE_ASYNC";
const CHANGE_KEYWORD_ASYNC = "CHANGE_KEYWORD_ASYNC";

export const onPrevPage = () => ({ type: PREV_NEWS_PAGE });
export const onNextPage = () => ({ type: NEXT_NEWS_PAGE });
export const changeKeyword = (keyword) => ({
  type: CHANGE_KEYWORD,
  payload: keyword,
});

export const onPrevPageAsync = () => ({ type: PREV_NEWS_PAGE_ASYNC });
export const onNextPageAsync = () => ({ type: NEXT_NEWS_PAGE_ASYNC });
export const changeKeywordAsync = (keyword) => ({
  type: CHANGE_KEYWORD_ASYNC,
  payload: keyword,
});

function* prevSaga() {
  yield delay(500);
  yield put(onPrevPage());
}

function* nextSaga() {
  yield delay(500);
  yield put(onNextPage());
}

function* changeSaga(action) {
  yield delay(500);
  yield put(changeKeyword(action.payload));
}

export function* newsSearchSaga() {
  yield takeLatest(PREV_NEWS_PAGE_ASYNC, prevSaga);
  yield takeLatest(NEXT_NEWS_PAGE_ASYNC, nextSaga);
  yield takeLatest(CHANGE_KEYWORD_ASYNC, changeSaga);
}

const initialState = {
  keyword: "국방부",
  index: 0,
};

export default function newsSearch(state = initialState, action) {
  switch (action.type) {
    case PREV_NEWS_PAGE:
      return { ...state, index: state.index - 1 };
    case NEXT_NEWS_PAGE:
      return { ...state, index: state.index + 1 };
    case CHANGE_KEYWORD:
      return { index: 0, keyword: action.payload };
    default:
      return state;
  }
}
