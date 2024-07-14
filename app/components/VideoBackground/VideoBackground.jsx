import React from "react";
import "./video.css";
const VideoBackground = () => {
  return (
    <video loop autoPlay muted className="video">
      <source src="/vedio.mp4" type="video/mp4" />
    </video>
  );
};

export default VideoBackground;
