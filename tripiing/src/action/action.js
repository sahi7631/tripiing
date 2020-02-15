
import * as C from '../configs/constant';

export function defaultAction() {
  return {
    type: C.DEFAULT_ACTION,
  };
}

export function getRequest(data) {
  return {
    type: C.GET_REQUEST,
    data,
  };
}

export function postRequest(data) {
  return {
    type: C.POST_REQUEST,
    data,
  };
}

export function deleteRequest(data) {
  return {
    type: C.DELETE_REQUEST,
    data,
  };
}

export function setUserDetails(data) {
  return {
    type: C.SET_USER_DETAILS,
    data,
  };
}

// export function setUserLanguage(data, callback) {
//   return {
//     type: C.SET_USER_LANGUAGE,
//     data,
//     callback,
//   };
// }


// export function updateUserLanguage(data) {
//   return {
//     type: C.UPDATE_USER_LANGUAGE,
//     data,
//   };
// }

// export function updateLoadingState(data) {
//   return {
//     type: C.UPDATE_LOADING_STATE,
//     data,
//   };
// }

// export function setAppError(data) {
//   return {
//     type: C.SET_APP_ERROR,
//     data,
//   };
// }


// export function setAppConfig(data) {
//   return {
//     type: C.SET_APP_CONFIG,
//     data,
//   };
// }


export function logout() {
  return {
    type: C.LOGOUT,
  };
}