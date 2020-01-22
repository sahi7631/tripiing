import React from 'react';
import LoginContainer from './LoginContainer';

export default class Login extends React.PureComponent {
  render() {
      return <LoginContainer {...this.props} />
  }
}