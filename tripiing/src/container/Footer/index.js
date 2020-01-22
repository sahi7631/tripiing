import React from 'react';
import FooterContainer from './FooterContainer';

export default class Header extends React.PureComponent {
  render() {
      return <FooterContainer {...this.props} />
  }
}