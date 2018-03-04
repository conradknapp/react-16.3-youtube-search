import React from "react";

class VideoSearch extends React.Component {
  searchInput = React.createRef();

  state = {
    query: ""
  };

  onSearchSubmit = event => {
    const { value: query } = this.searchInput.value;
    const { onVideoSearch } = this.props;

    event.preventDefault();

    this.setState({ query });
    onVideoSearch(query);

    event.currentTarget.reset();
  };

  render() {
    return (
      <form onSubmit={this.onSearchSubmit}>
        <input ref={this.searchInput} defaultValue={this.state.term} />
      </form>
    );
  }
}

export default VideoSearch;
