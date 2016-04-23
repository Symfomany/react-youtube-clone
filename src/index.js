import React from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

import { apiKey } from '../config';

import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      videos: [],
      selectedVideos: null
    };
    this.videoSearch('reactjs');
  }
  videoSearch(term) {
    YTSearch({key: apiKey, term: term}, (videos => {
      this.setState({
        videos: videos,
        selectedVideos: videos[0]
      });
    }));
  }
  render() {
    return (
      <div>
        <SearchBar
          onSearchTermChange={event => this.videoSearch(event)}
        />
        <VideoList
          videos={this.state.videos}
        />
      </div>
    );
  }
}

ReactDom.render(<App />, document.querySelector('.container'))