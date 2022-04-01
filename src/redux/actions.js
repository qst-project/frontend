import { ADD_ANSWER, ADD_QUESTION, CHANGE_QUESTIONS_ORDER, REMOVE_ANSWER, REMOVE_QUESTION, SELECT_CHECKBOX, SELECT_RADIO, SET_ANSWER, SET_QUESTION, SET_TEXT_ANSWER } from "./types"

export const selectCheckboxAC = (questionID, answerID) => {
  return {
    type: SELECT_CHECKBOX,
    questionID,
    answerID
  }
}

export const selectRadioAC = (questionID, answerID) => {
  return {
    type: SELECT_RADIO,
    questionID,
    answerID
  }
}

export const setTextAnswerAC = (questionID, value) => {
  return {
    type: SET_TEXT_ANSWER,
    questionID,
    value
  }
}

export const addQuestionAC = (kind) => {
  return {
    type: ADD_QUESTION,
    kind
  }
}

export const addAnswerAC = (questionID) => {
  return {
    type: ADD_ANSWER,
    questionID
  }
}

export const setQuestionAC = (questionID, value) => {
  return {
    type: SET_QUESTION,
    questionID,
    value
  }
}

export const setAnswerAC = (questionID, answerID, value) => {
  return {
    type: SET_ANSWER,
    questionID,
    answerID,
    value
  }
}

export const removeQuestionAC = (questionID) => {
  return {
    type: REMOVE_QUESTION,
    questionID
  }
}

export const removeAnswerAC = (questionID, answerID) => {
  return {
    type: REMOVE_ANSWER,
    questionID,
    answerID
  }
}

export const changeQuestionsOrderAC = (sourceID, destinationID) => {
  return {
    type: CHANGE_QUESTIONS_ORDER,
    sourceID,
    destinationID
  }
}