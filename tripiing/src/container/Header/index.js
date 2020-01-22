import React from 'react';
import HeaderContainer from './HeaderContainer';

export default class Header extends React.PureComponent {
  render() {
      return <HeaderContainer {...this.props} />
  }
}