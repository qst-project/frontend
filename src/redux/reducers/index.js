import { combineReducers } from 'redux'
import questionnaireReducer  from './questionnaire';
import editorReducer from './editorReducer'

export default combineReducers({
    questionnaire: questionnaireReducer,
    editor: editorReducer,
})