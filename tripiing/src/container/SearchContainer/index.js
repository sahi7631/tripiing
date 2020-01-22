import React from 'react';
import SearchContainer from './SearchContainer';

export default class Search extends React.PureComponent {
  render() {
      return <SearchContainer {...this.props} />
  }
}