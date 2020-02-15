import React from 'react';
import LoginContainer from './LoginContainer';
import { connect } from 'react-redux';
import * as appActions from '../../action/action';

 class Login extends React.PureComponent {
  render() {
      return <LoginContainer {...this.props} />
  }
}

function mapDispatchToProps(dispatch) {
  return {

    getRequest: (reqObject) => dispatch(appActions.getRequest(reqObject)),
    postRequest: (reqObject) => dispatch(appActions.postRequest(reqObject)),
    loagout: () => dispatch(appActions.logout()),
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Login);
