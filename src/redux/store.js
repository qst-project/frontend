import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { editorReducer } from './reducers/editorReducer';
import { questReducer } from './reducers/questReducer';

const rootReducer = combineReducers({
  questionnaire: questReducer,
  editor: editorReducer
})

export default createStore(rootReducer, composeWithDevTools());