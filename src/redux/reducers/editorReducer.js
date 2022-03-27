import { ADD_ANSWER, ADD_QUESTION } from "../types";

const initialState = {
  questionnaire: {
    title: 'My survey',
    questions: [
      {
        type: 'checkbox',
        id: 0,
        question: '',
        answers: []
      },
    ]
  }
}

export const editorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUESTION: {
      const newQuestions = [...state.questionnaire.questions];
      let question = {};
      switch (action.kind) {
        case 'checkbox': {
          question = {
            type: action.kind,
            question: '',
            answers: []
          };
          break;
        }
        case 'radio': {
          question = {
            type: action.kind,
            question: '',
            answers: []
          };
          break;
        }
      }
      question.id = state.questionnaire.questions.length;
      newQuestions.push(question);
      return {...state, questionnaire: {...state.questionnaire, questions: newQuestions}};
    }

    case ADD_ANSWER: {
      const newQuestions = [...state.questionnaire.questions];
      newQuestions[action.questionID].answers.push({
        label: ''
      });
      return {...state, questionnaire: {...state.questionnaire, questions: newQuestions}};
    }
    default: return state;
  }
}