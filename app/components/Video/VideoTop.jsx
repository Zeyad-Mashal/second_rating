import React from "react";
import Video from "next-video";
import videoSecond from "../../../videos/vedio.mp4";
const VideoTop = () => {
  return (
    <div>
      <Video src={videoSecond} />
    </div>
  );
};

export default VideoTop;
