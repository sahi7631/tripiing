import React from 'react';
import FooterContainer from './FooterContainer';

export default class Footer extends React.PureComponent {
  render() {
      return <FooterContainer {...this.props} />
  }
}