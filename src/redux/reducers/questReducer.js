import { SELECT_CHECKBOX, SELECT_RADIO, SET_TEXT_ANSWER } from "../types";

const initialState = {
  title: 'My survey',
  questions: [
    {
      type: 'radio',
      id: 0,
      question: 'How did you find out about the vacancy of our Company?',
      answers: [
        {label: 'Company website', checked: false},
        {label: 'HeadHunter', checked: false},
        {label: 'From friends', checked: false},
        {label: 'Other', checked: false},
      ]
    },
  
    {
      type: 'checkbox',
      id: 1,
      question: 'What did you like our company?',
      answers: [
        {label: 'Salary', checked: false},
        {label: 'Working conditions', checked: false},
        {label: 'Opportunity for career growth', checked: false},
      ]
    },
      
    {
      type: 'text',
      id: 2,
      question: 'Please, write something about you',
      answer: ''
    },
  ]
}

export const questReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CHECKBOX: {
      const newQuestions = [...state.questions];
      const checked = newQuestions[action.questionID].answers[action.answerID].checked;
      newQuestions[action.questionID].answers[action.answerID].checked = !checked;
      return {...state, questions: newQuestions};
    }
    case SELECT_RADIO: {
      const newQuestions = [...state.questions];
      const answers = newQuestions[action.questionID].answers;
      for (let answer of answers) answer.checked = false;
      answers[action.answerID].checked = !answers[action.answerID].checked;
      return {...state, questions: newQuestions}
    }
    case SET_TEXT_ANSWER: {
      const newQuestions = [...state.questions];
      newQuestions[action.questionID].answer = action.value;
      return {...state, questions: newQuestions};
    }
    default: return state;
  }
}