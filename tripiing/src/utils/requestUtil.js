import qs from 'query-string';

const authPrefix = 'Bearer ';
const  baseUrl = "";
const apiEndPoints = {
    login: 'login',
    register: 'register',
    generateOtp: 'otp/generate-otp',
    validateOtp: 'otp/validate-otp',
}


export const formGetRequestObject = (key, data) => {
  const paramString = data.params && qs.stringify(data.params) ? `?${qs.stringify(data.params)}` : '';
  const obj = {
    url: data.url ? (data.url + paramString) : (apiEndPoints[key] + paramString),
    options: {
      method: 'GET',
      successCb: data.successCb,
      errorCb: data.errorCb,
      headers: {},
    },
  };
  // if (authToken && !data.disableHeaders) {
  //   obj.options.headers.Authorization = authToken ? authPrefix + authToken : '';
  // }
  return obj;
};


export const formPostRequestObject = (key, data) => {
  const authToken = data.userDetails && data.userDetails.bpm_token;
  // const isUploadMultipart = data.contentType === 'multipart/form-data';
  // const isUploadForeign = !!data.uploadClient;

  // let headers = {};
  // if (authToken) {
  //   headers.Authorization = authToken ? authPrefix + authToken : '';
  // }
  // if (!isUploadMultipart) {
  //   headers['Content-Type'] = 'application/json';
  // } else {
  //   headers['Content-Type'] = 'multipart/form-data';
  // }
  // if (isUploadForeign) {
  //   const foreignHeaders = appConfig.getForeignHeaders(data.uploadClient);
  //   headers = { ...headers, ...foreignHeaders };
  // }

  // const options = {
  //   method: 'POST',
  //   body: !isUploadMultipart ? JSON.stringify(data.params) : data.params,
  //   successCb: data.successCb,
  //   errorCb: data.errorCb,
  //   headers,
  // };
  // return {
  //   url: data.url || appConfig.getAPIEndPoint(key),
  //   options,
  // };
  return {};
};

export const formDeleteRequestObject = (key, data) => {
  // const authToken = data.userDetails && data.userDetails.bpm_token;
  // const paramString = data.params && qs.stringify(data.params) ? `?${qs.stringify(data.params)}` : '';
  // const headers = {};
  // if (authToken) {
  //   headers.Authorization = authToken ? authPrefix + authToken : '';
  // }
  // const options = {
  //   method: 'DELETE',
  //   successCb: data.successCb,
  //   errorCb: data.errorCb,
  //   headers,
  // };
  // return {
  //   url: data.url ? (data.url + paramString) : (apiEndPoints[key] + paramString),
  //   options,
  // };
  return {};
};

export const updateRequestObjectOptions = (reqObjOptions, data) => {
  // const authToken = data && data.bpm_token;
  // const headers = {};
  // if (authToken) {
  //   headers.Authorization = authToken ? authPrefix + authToken : '';
  // }
  // return {
  //   ...reqObjOptions,
  //   headers,
  // };
  return {};
};
