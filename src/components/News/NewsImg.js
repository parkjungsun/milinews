import React, { useEffect, useState } from "react";
import { getUrlMeta } from "../../utils/parseUtil";

function NewsImg({ urls }) {
  const proxyUrl =
    "http://api.scraperapi.com?api_key=" +
    process.env.REACT_APP_PROXY_API_KEY +
    "&url=" +
    urls;
  const [image, setImage] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function fetchUrl() {
      let im = await getUrlMeta(proxyUrl);
      setImage(im.image);
    }
    if (!isLoaded) {
      fetchUrl();
      setIsLoaded(true);
    }
  }, [image, isLoaded, proxyUrl]);

  return (
    <div>
      <img className="news_img_url" alt="" src={image} />
    </div>
  );
}

export default NewsImg;
