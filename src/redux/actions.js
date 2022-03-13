import { SELECT_CHECKBOX, SELECT_RADIO } from "./types"

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