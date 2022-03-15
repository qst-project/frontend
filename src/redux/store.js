import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { questReducer } from './reducers/questReducer';

const rootReducer = combineReducers({
  questionnaire: questReducer
})

export default createStore(rootReducer, composeWithDevTools());