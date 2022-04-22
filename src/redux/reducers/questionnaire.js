import { handleActions } from 'redux-actions'
import { selectCheckboxAC, selectRadioAC } from "../actions/actions";

const INITIAL_STATE = {
  title: 'My survey',
  questions: [
    {
      type: 'radio',
      id: '0',
      question: 'How did you find out about the vacancy of our Company?',
      answers: [
        { label: 'Company website', checked: false },
        { label: 'HeadHunter', checked: false },
        { label: 'From friends', checked: false },
        { label: 'Other', checked: false },
      ]
    },

    {
      type: 'checkbox',
      id: '1',
      question: 'What did you like our company?',
      answers: [
        { label: 'Salary', checked: false },
        { label: 'Working conditions', checked: false },
        { label: 'Opportunity for career growth', checked: false },
      ]
    },

    {
      type: 'checkbox',
      id: '2',
      question: 'What did you like our company?',
      answers: [
        { label: 'Salary', checked: false },
        { label: 'Working conditions', checked: false },
        { label: 'Opportunity for career growth', checked: false },
      ]
    },
  ]
}

export default handleActions({
  [selectCheckboxAC](state, action) {
    const questionID = action.payload.questionID;
    const answerID = action.payload.answerID;
    const questions = [...state.questions];
    const checked = questions[questionID].answers[answerID].checked;
    questions[questionID].answers[answerID].checked = !checked;
    return { ...state, questions: questions }
  },
  [selectRadioAC](state, action) {
    const questionID = action.payload.questionID;
    const answerID = action.payload.answerID;
    const questions = [...state.questions];
    const answers = questions[questionID].answers;
    for (let answer of answers) answer.checked = false;
    answers[answerID].checked = !answers[answerID].checked;
    return { ...state, questions: questions }
  }
}, INITIAL_STATE)