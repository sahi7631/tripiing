import React from 'react';
import AboutContainer from './AboutContainer';

export default class About extends React.PureComponent {
  render() {
      return <AboutContainer {...this.props} />
  }
}