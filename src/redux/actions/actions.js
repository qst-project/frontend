import { createAction } from 'redux-actions'
import { SELECT_CHECKBOX, SELECT_RADIO } from "../../constants/actionTypes"

// export const selectCheckboxAC = (questionID, answerID) => {
//   return {
//     type: SELECT_CHECKBOX,
//     questionID,
//     answerID
//   }
// }

// export const selectRadioAC = (questionID, answerID) => {
//   return {
//     type: SELECT_RADIO,
//     questionID,
//     answerID
//   }
// }


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