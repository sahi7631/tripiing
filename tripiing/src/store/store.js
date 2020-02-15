import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducer/index';
import defaultSaga from '../saga/index';

// const sagaMiddleware =  createSagaMiddleware();
// const midldeware = [sagaMiddleware];

export const store  = createStore(rootReducer);
// store.runSaga = sagaMiddleware.run;
// store.injectedReducers = {};
// store.injectedSagas = {defaultSaga}; 

export default { store };