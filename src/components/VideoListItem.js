import React from "react";

const VideoListItem = ({ video, onVideoSelect }) => {
  return <li onClick={() => onVideoSelect(video)}>{video.snippet.title}</li>;
};

export default VideoListItem;
