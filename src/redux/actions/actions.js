import { createAction } from 'redux-actions'
import { ADD_ANSWER, ADD_QUESTION, CHANGE_QUESTIONS_ORDER, REMOVE_ANSWER, REMOVE_QUESTION, SELECT_CHECKBOX, SELECT_RADIO, SET_ANSWER, SET_QUESTION, SET_TEXT_ANSWER } from "../../constants/actionTypes"

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

export const addQuestionAC = createAction(ADD_QUESTION, type => type)

export const addAnswerAC = createAction(ADD_ANSWER, questionID => questionID)

export const setQuestionAC = createAction(SET_QUESTION, (questionID, value) => {
    return {
        questionID,
        value
    }
})

export const setAnswerAC = createAction(SET_QUESTION, (questionID, answerID, value) => {
    return {
        questionID,
        answerID,
        value
    }
})

export const removeQuestionAC = createAction(REMOVE_QUESTION, questionID => questionID)

export const removeAnswerAC = createAction(REMOVE_ANSWER, (questionID, answerID) => {
    return {
        questionID,
        answerID
    }
})

export const changeQuestionsOrderAC = createAction(CHANGE_QUESTIONS_ORDER, (sourceID, destinationID) => {
    return {
        sourceID,
        destinationID
    }
})

/*
import { ADD_ANSWER, ADD_QUESTION, CHANGE_QUESTIONS_ORDER, REMOVE_ANSWER, REMOVE_QUESTION, SELECT_CHECKBOX, SELECT_RADIO, SET_ANSWER, SET_QUESTION, SET_TEXT_ANSWER } from "./../constants/actionTypes"

export const setTextAnswerAC = (questionID, value) => {
  return {
    type: SET_TEXT_ANSWER,
    questionID,
    value
  }
}
*/