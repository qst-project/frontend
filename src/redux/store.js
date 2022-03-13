import { combineReducers, createStore } from 'redux';
import { questReducer } from './reducers/questReducer';

const rootReducer = combineReducers({
  questionnaire: questReducer
})

export default createStore(rootReducer);