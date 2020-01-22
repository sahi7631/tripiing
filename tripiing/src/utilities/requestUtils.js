// /*
//   This file contains the utility methods for request related functions
// */
// import qs from 'query-string';
// import * as appConfig from '../configs/appConfig';
// import { strings } from '../../locales/i18n';
// // TODO: Add loader for requesting

// const longRequestMap = (screenId) => {
//   const obj = {
//     'statusScreen-2': strings('loaders.processingIncomeVerify'),
//     'statusScreen-4': strings('loaders.processingApplication'),
//   };
//   return obj[screenId];
// };

// const isKeycloak = true;
// const authPrefix = isKeycloak ? 'Bearer ' : 'Basic ';

// export const formGetRequestObject = (key, data) => {
//   const authToken = data.userDetails && data.userDetails.bpm_token;
//   const refreshToken = data.userDetails && data.userDetails.refreshToken;
//   const paramString = data.params && qs.stringify(data.params) ? `?${qs.stringify(data.params)}` : '';

//   const obj = {
//     url: data.url ? (data.url + paramString) : (appConfig.getAPIEndPoint(key) + paramString),
//     options: {
//       method: 'GET',
//       refreshToken,
//       successCb: data.successCb,
//       errorCb: data.errorCb,
//       headers: {},
//     },
//   };
//   if (authToken && !data.disableHeaders) {
//     obj.options.headers.Authorization = authToken ? authPrefix + authToken : '';
//   }

//   return obj;
// };


// export const formPostRequestObject = (key, data) => {
//   const authToken = data.userDetails && data.userDetails.bpm_token;
//   const refreshToken = data.userDetails && data.userDetails.refreshToken;
//   const isUploadMultipart = data.contentType === 'multipart/form-data';
//   const isUploadForeign = !!data.uploadClient;

//   let headers = {};
//   if (authToken) {
//     headers.Authorization = authToken ? authPrefix + authToken : '';
//   }
//   if (!isUploadMultipart) {
//     headers['Content-Type'] = 'application/json';
//   } else {
//     headers['Content-Type'] = 'multipart/form-data';
//   }
//   if (isUploadForeign) {
//     const foreignHeaders = appConfig.getForeignHeaders(data.uploadClient);
//     headers = { ...headers, ...foreignHeaders };
//   }

//   const options = {
//     method: 'POST',
//     body: !isUploadMultipart ? JSON.stringify(data.params) : data.params,
//     successCb: data.successCb,
//     errorCb: data.errorCb,
//     headers,
//     refreshToken,
//   };


//   return {
//     url: data.url || appConfig.getAPIEndPoint(key),
//     options,
//   };
// };

// export const formDeleteRequestObject = (key, data) => {
//   const authToken = data.userDetails && data.userDetails.bpm_token;
//   const refreshToken = data.userDetails && data.userDetails.refreshToken;
//   const paramString = data.params && qs.stringify(data.params) ? `?${qs.stringify(data.params)}` : '';
//   const headers = {};
//   if (authToken) {
//     headers.Authorization = authToken ? authPrefix + authToken : '';
//   }

//   const options = {
//     method: 'DELETE',
//     successCb: data.successCb,
//     errorCb: data.errorCb,
//     headers,
//     refreshToken,
//   };
//   return {
//     url: data.url ? (data.url + paramString) : (appConfig.getAPIEndPoint(key) + paramString),
//     options,
//   };
// };

// // TODO: move to loader helper
// export const getLongReqObj = (screenId) => ({
//   isLongReq: screenId && !!longRequestMap(screenId),
//   message: screenId && longRequestMap(screenId),
// });


// export const buildRefreshTokenObj = (key, data) => ({
//   url: data.url || appConfig.getAPIEndPoint(key),
//   options: {
//     method: 'POST',
//     body: JSON.stringify(data.params),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     successCb: data.successCb,
//     errorCb: data.errorCb,
//   },
// });


// export const updateRequestObjectOptions = (reqObjOptions, data) => {
//   const authToken = data && data.bpm_token;
//   const refreshToken = data && data.refreshToken;
//   const headers = {};
//   if (authToken) {
//     headers.Authorization = authToken ? authPrefix + authToken : '';
//   }
//   return {
//     ...reqObjOptions,
//     headers,
//     refreshToken,
//   };
// };

// export const sendDeviceId = (key,data) => {
//   var requestObject = {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   }
//   return {
//     url: data.url + appConfig.getAPIEndPoint(key),
//     options: requestObject
//   }
// };
