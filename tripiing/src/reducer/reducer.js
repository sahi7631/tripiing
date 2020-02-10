/*
 *
 * AppDetails reducer
 *
 */

import { fromJS } from 'immutable';
import * as C from './constants';
import { defaultScreen } from '../../configs/appConstants';

const initialState = fromJS({
  userDetails: {},
  loadingState: {},
  popupData: {},
  showPopupState: false,
  dashboardData: {},
  showAppError: false,
  currentScreen: defaultScreen,
  appConfig: {},
});

function appDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case C.DEFAULT_ACTION:
      return state;
    case C.SET_USER_DETAILS:
      return state
      .set('userDetails', action.data);
    case C.UPDATE_LOADING_STATE:
      return state
    case C.UPDATE_USER_LANGUAGE:
      return state
      .set('userLanguage', action.data);
    case C.SET_APP_ERROR:
      return state
      .set('showAppError', action.data);
    case C.NAVIGATE_TO_SCREEN:
      return state
      .set('currentScreen', action.screen);
    case C.SET_APP_CONFIG:
      return state
      .set('appConfig', action.data);
    default:
      return state;
  }
}

export default appDetailsReducer;