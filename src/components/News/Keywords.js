import React from "react";

function Keywords({ items, changeKeyword }) {
  const { keyword } = items;
  if (!keyword || Object.keys(keyword).length === 0)
    return <div>등록된 키워드가 없습니다...</div>;
  return (
    <div>
      {keyword.map((word, index) => (
        <div
          className="news_keyword"
          key={index}
          onClick={() => changeKeyword(word)}
        >
          <div>{word}</div>
        </div>
      ))}
    </div>
  );
}

export default Keywords;
