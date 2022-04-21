import createSagaMiddleware from 'redux-saga'
import { applyMiddleware } from 'redux'

const sagaMiddleware = createSagaMiddleware();

export default applyMiddleware(sagaMiddleware)