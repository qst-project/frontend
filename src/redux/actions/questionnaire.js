import { createAction } from 'redux-actions';
import {
    SELECT_CHECKBOX,
    SELECT_RADIO,
    SET_TEXT_ANSWER
} from "@constants/actionTypes"

export const selectCheckboxAC = createAction(SELECT_CHECKBOX, (questionID, answerID) => {
    return {
        questionID,
        answerID
    }
})
export const selectRadioAC = createAction(SELECT_RADIO, (questionID, answerID) => {
    return {
        questionID,
        answerID
    }
})

export const setTextAnswerAC = createAction(SET_TEXT_ANSWER, (value, questionID) => {
    return {
        value,
        questionID,
    }
})