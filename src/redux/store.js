import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import middleware  from './sagas/index';
import rootReducer from './reducers/index';

export default createStore(rootReducer, middleware, composeWithDevTools());

