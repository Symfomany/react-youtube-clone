import React, { Component } from 'react';
import ReactDom from 'react-dom';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: 'yy'};
  }
  onInputChange(event) {
    this.setState({term: event});
    this.props.onSearchTermChange(event);
  }
  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        >
        </input>
      </div>
    );
  }
}

export default SearchBar;