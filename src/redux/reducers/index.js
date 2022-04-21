import { combineReducers } from 'redux'
import questionnaireReducer  from './questionnaire';

export default combineReducers({
    questionnaire: questionnaireReducer,
})