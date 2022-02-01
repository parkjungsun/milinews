import React from "react";
import { calculateDate } from "../../utils/dateUtil";
import NewsImg from "./NewsImg";

function NewsInfo({ items }) {
  if (!items || Object.keys(items).length === 0)
    return (
      <div className="news_block">
        <div className="news_title">뉴스를 불러오는 중 입니다...</div>
      </div>
    );
  return (
    <div className="news_box">
      {items.map((item, index) => (
        <div
          className="news_block"
          key={index}
          onClick={() => window.open(item.link, "_blank")}
        >
          <div className="news_img">
            <NewsImg urls={item.link} />
          </div>
          <div>
            <div className="news_title">
              {item.title
                .replace(/&quot;/gi, "")
                .replace(/<b>/gi, "")
                .replace(/<\/b>/gi, "")}
            </div>
            <div className="news_date">{calculateDate(item.pubDate)}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewsInfo;
