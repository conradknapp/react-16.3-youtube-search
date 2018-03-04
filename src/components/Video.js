import React from "react";

const Video = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <section>
      <iframe src={url} />
      <p>{video.snippet.title}</p>
      <p>{video.snippet.url}</p>
    </section>
  );
};

export default Video;
