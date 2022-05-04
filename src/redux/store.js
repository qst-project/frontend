import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';

import rootSaga  from '@sagas';
import rootReducer from '@reducers';


const sagaMiddleware = createSagaMiddleware()
export default createStore(rootReducer, applyMiddleware(sagaMiddleware), composeWithDevTools());

sagaMiddleware.run(rootSaga);
