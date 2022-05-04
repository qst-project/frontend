import { createAction } from 'redux-actions';
import {
    SELECT_CHECKBOX,
    SELECT_RADIO,
    SET_TEXT_ANSWER,
    GET_QUESTIONNAIRE_REQUESTED,
    GET_QUESTIONAIRE_SUCCEEDED,
    GET_QUESTIONNAIRE_FAILED
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

export const getQuestionnaireAC = createAction(GET_QUESTIONNAIRE_REQUESTED, (ref) => {
    return {
        ref,
    }
})

export const getQuestionnaireSucceededAC = createAction(GET_QUESTIONAIRE_SUCCEEDED, (questionnaire) => {
    return {
        questionnaire,
    }
})

export const getQuestionnaireFailedAC = createAction(GET_QUESTIONNAIRE_FAILED, (error) => {
    return {
        error,
    }
})