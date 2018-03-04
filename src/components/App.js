import React, { Component } from "react";

import VideoSearch from "./VideoSearch";
import Video from "./Video";
import VideoResults from "./VideoResults";

import YTSearch from "youtube-api-search";
const API_KEY = "AIzaSyDB1gcwiIVdtAN6GA3jj1B9TLuBEYf7Akc";

export default class App extends Component {
  state = {
    video: null,
    videos: []
  };

  onVideoSearch = term => {
    YTSearch({ key: API_KEY, term }, videos => {
      this.setState({
        video: videos[0],
        videos
      });
    });
  };

  render() {
    console.log(this.state.video);
    return (
      <main>
        <VideoSearch onVideoSearch={this.onVideoSearch} />
        <Video />
        <VideoResults />
      </main>
    );
  }
}