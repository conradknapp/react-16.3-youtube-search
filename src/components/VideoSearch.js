import React from "react";
import debounce from "lodash.debounce";

class VideoSearch extends React.Component {
  searchInput = React.createRef();

  state = {
    query: ""
  };

  onSearch = () => {
    const { onVideoSearch } = this.props;
    const { value: query } = this.searchInput.value;
    this.setState({ query });
    if (this.state.query) {
      onVideoSearch(this.state.query);
    }
  };

  onSearchSubmit = event => {
    event.preventDefault();

    const { value: query } = this.searchInput.value;
    const { onVideoSearch } = this.props;

    this.setState({ query });
    onVideoSearch(query);

    event.currentTarget.reset
      ? event.currentTarget.reset()
      : event.target.parentElement.reset();
  };

  render() {
    const debounced = debounce(() => this.onSearch(), 3000);
    return (
      <form onSubmit={this.onSearchSubmit}>
        <input
          ref={this.searchInput}
          onChange={debounced}
          defaultValue={this.state.term}
        />
        <img
          onClick={this.onSearchSubmit}
          src="https://giphy.com/static/img/animations/search_animation_active.gif"
        />
      </form>
    );
  }
}

export default VideoSearch;
