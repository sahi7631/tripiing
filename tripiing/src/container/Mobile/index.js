import React from 'react';
import MobileContainer from './MobileContainer';

export default class Mobile extends React.PureComponent {
  render() {
      return <MobileContainer {...this.props} />
  }
}