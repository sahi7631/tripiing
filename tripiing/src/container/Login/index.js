import React from 'react';
import LoginContainer from './LoginContainer';
import { connect } from 'react-redux';

 class Login extends React.PureComponent {
  render() {
      return <LoginContainer {...this.props} />
  }
}

const mapStateToProps = createStructuredSelector({
  appDetails: makeSelectAppDetails(),
  dashboardData: makeSelectDashboardData(),
  userDetails: makeSelectUserDetails(),
  userLanguage: makeSelectUserLanguage(),
  loadingState: makeSelectLoaderState(),
  popupData: makeSelectPopupData(),
  showPopupState: makeSelectShowPopupState(),
  showAppError: makeSelectAppErrorData(),
  currentScreen: makeSelectCurrentScreen(),
  appConfig: makeSelectAppConfig(),
});

function mapDispatchToProps(dispatch) {
  return {
    setUserDetails: (data) => dispatch(appActions.setUserDetails(data)),
    setUserLanguage: (data, callback) => dispatch(appActions.setUserLanguage(data, callback)),
    clearJourneyData: () => dispatch(renderActions.clearJourneyData()),
    setAppError: (data) => dispatch(appActions.setAppError(data)),
    getRequest: (reqObject) => dispatch(appActions.getRequest(reqObject)),
    navigateToScreen: (screen, params) => dispatch(appActions.navigateToSCreen(screen, params)),
    clearCurrentScreen: () => dispatch(appActions.clearCurrentScreen()),
    setAppConfig: (data) => dispatch(appActions.setAppConfig(data)),
    logout: () => dispatch(appActions.logout()),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
