import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNewsAdd, clearNews } from "../../modules/news";
import { Link } from "react-router-dom";
import {
  onPrevPageAsync,
  onNextPageAsync,
  changeKeywordAsync,
} from "../../modules/newsSearch";
import NewsInfo from "./NewsInfo";
import Keywords from "./Keywords";

function NewsContainer() {
  const dispatch = useDispatch();

  const news = useSelector((state) => state.news);
  const newsSearch = useSelector((state) => state.newsSearch);

  // 페이징용
  const onPrevNews = () => {
    if (newsSearch.index > 0) {
      dispatch(onPrevPageAsync());
    }
  };

  const onNextNews = () => {
    dispatch(onNextPageAsync());
    // 페이징용
    // if (newsSearch.index < 9) {
    //   dispatch(onNextPageAsync());
    // }
  };

  const changeKeyword = (keyword) => {
    dispatch(changeKeywordAsync(keyword));
    // 더보기용
    dispatch(clearNews());
  };

  useEffect(() => {
    dispatch(getNewsAdd(newsSearch));
    // 페이징용
    // return () => {
    //   dispatch(clearNews());
    // };
  }, [newsSearch, dispatch]);

  return (
    <div className="news_container">
      <div className="news_header">
        <Link className="atag" to="/">
          <div className="container_title">MILINEWS</div>
        </Link>
        <div className="news_search_box">
          <div className="news_search">검색</div>
          <div className="news_search_value">{newsSearch.keyword}</div>
        </div>
        <Keywords
          changeKeyword={changeKeyword}
          items={{ keyword: ["국방부", "육군", "군대"] }}
        />
      </div>
      <div className="news_body">
        <NewsInfo items={news} />
        <div className="paging_block">
          <div className="js_button js_h_button" onClick={onNextNews}>
            더보기
          </div>
          {/* 페이징용
          <div className="js_button js_h_button" onClick={onPrevNews}>
            이전
          </div>
          <div className="js_button">{newsSearch.index + 1} page</div>
          <div className="js_button js_h_button" onClick={onNextNews}>
            다음
          </div> 
        */}
        </div>
      </div>
    </div>
  );
}

export default NewsContainer;
