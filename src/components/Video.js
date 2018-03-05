import React from "react";

const Video = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <React.Fragment>
      <iframe src={url} />
      <p>{video.snippet.title}</p>
    </React.Fragment>
  );
};

export default Video;
