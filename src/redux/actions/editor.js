import { createAction } from 'redux-actions'

import {
    ADD_ANSWER, ADD_QUESTION, CHANGE_QUESTIONS_ORDER,
    REMOVE_ANSWER, REMOVE_QUESTION,
    SET_ANSWER, SET_QUESTION, SET_TEXT_ANSWER
} from "@constants/actionTypes"

export const addQuestionAC = createAction(ADD_QUESTION, (type) => {
    return {
        type
    }
})

export const addAnswerAC = createAction(ADD_ANSWER, (questionID) => {
    return {
        questionID
    }
})

export const setQuestionAC = createAction(SET_QUESTION, (questionID, value) => {
    return {
        questionID,
        value
    }
})

export const setAnswerAC = createAction(SET_ANSWER, (questionID, answerID, value) => {
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

export const setTextAnswerAC = createAction(SET_TEXT_ANSWER, (value, questionID) => {
    return {
        value,
        questionID,
    }
})