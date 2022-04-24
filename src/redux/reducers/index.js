import { combineReducers } from 'redux'
import questionnaireReducer  from './questionnaire';
import editorReducer from './editor'

export default combineReducers({
    questionnaire: questionnaireReducer,
    editor: editorReducer,
})