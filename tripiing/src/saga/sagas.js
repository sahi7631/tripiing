import * as requestUtils from '../utils/requestUtil';
import * as C from '../configs/constant';
import { call } from 'redux-saga/effects';

export function* apiCall(action) {
    let response = {};
    let requestObj;
    let data = action.data.data;
    let key = action.data.key;
    if (action.type == C.GET_REQUEST) {
        requestObj = requestUtils.formGetRequestObject(key, data);
    }
    if (action.type == C.POST_REQUEST) {
        requestObj = requestUtils.formPostRequestObject(key, data);
    }
    if (action.type == C.DELETE_REQUEST) {
        requestObj = requestUtils.formDeleteRequestObject(key, data)
    }
    if (action.type == C.UPDATE_REQUEST) {
        requestObj = requestUtils.formPostRequestObject(key, data)
    }
    response = call(requestObj, requestObj.url, requestObj.option);
    if(
        response.status &&
        response.status !== 200
        && response.status !== "success"
        && response.status !== "OK"
        && response.status !== true) {
            yield call(requestObj.options.errorCb, response); 
    }
    else {
        yield call(requestObj.options.successCb, response);
    }
}

