import React, { useState } from "react";
import "./styles/Video.css";

export const Video = () => {
  const [url, setUrl] = useState("");
  const [urlInput, setInput] = useState("");
  const pauseInterval = 5;

  const updateInput = (e) => {
    setInput(e.target.value);
  };
  const getVideo = () => {
    let urlBuilder =
      urlInput.substring(0, 24) + "embed/" + urlInput.substr(24 + 8);
    setUrl(urlBuilder);
  };

  return (
    <div className="videoComp">
      <input onChange={updateInput} value={urlInput} />
      <button onClick={getVideo}>Get my video!</button>
      {url === "" ? (
        <div />
      ) : (
        <div>
          <iframe
            width="900"
            height="506"
            src={url}
            frameborder="0"
            allowfullscreen
            className="video"
          ></iframe>
        </div>
      )}
    </div>
  );
};
