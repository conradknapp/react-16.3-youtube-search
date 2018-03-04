import React from "react";

import VideoListItem from "./VideoListItem";

const VideoResults = ({ videos, onVideoSelect }) => {
  const vids = videos.map(video => (
    <VideoListItem
      key={video.id.videoId}
      video={video}
      onVideoSelect={onVideoSelect}
    />
  ));

  return (
    <section>
      <ul>{vids}</ul>
    </section>
  );
};

export default VideoResults;
