import { ADD_QUESTION, SELECT_CHECKBOX, SELECT_RADIO } from "./types"

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

export const addQuestionAC = (kind) => {
  return {
    type: ADD_QUESTION,
    kind
  }
}