import React from 'react';
import HomeContainer from './HomeContainer';

export default class Home extends React.PureComponent {
  render() {
      return <HomeContainer {...this.props} />
  }
}