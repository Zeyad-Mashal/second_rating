import React from "react";

const VideoBackground = () => {
  return (
    <video controls autoPlay loop>
      <source src="/vedio.mp4" type="video/mp4" />
    </video>
  );
};

export default VideoBackground;
