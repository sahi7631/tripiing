import React from 'react';
import SubscribeContainer from './SubscribeContainer';

export default class Subscribe extends React.PureComponent {
  render() {
      return <SubscribeContainer {...this.props} />
  }
}