import * as C from '../configs/constant';
import { takeEvery } from 'redux-saga/effects';
import { apiCall } from './sagas';

export default function* defaultSaga() {
    yield takeEvery(C.GET_REQUEST, apiCall);
    yield takeEvery(C.POST_REQUEST, apiCall);
    yield takeEvery(C.UPDATE_REQUEST, apiCall);
    yield takeEvery(C.DELETE_REQUEST, apiCall);
}
