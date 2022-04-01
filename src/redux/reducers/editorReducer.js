import { ADD_ANSWER, ADD_QUESTION, CHANGE_QUESTIONS_ORDER, REMOVE_ANSWER, REMOVE_QUESTION, SET_ANSWER, SET_QUESTION } from "../types";

const initialState = {
  questionnaire: {
    title: 'My survey',
    questions: [
      // {
      //   type: 'radio',
      //   id: 0,
      //   question: '',
      //   answers: [
      //     {label: ''}
      //   ]
      // }

      // {
      //   type: 'checkbox',
      //   id: 0,
      //   question: '',
      //   answers: [
      //     {label: ''}
      //   ]
      // }

      // {
      //   type: 'text',
      //   id: 0,
      //   question: '',
      //   answer: ''
      // }
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
        case 'text': {
          question = {
            type: action.kind,
            question: ''
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

    case SET_QUESTION: {
      const newQuestions = [...state.questionnaire.questions];
      newQuestions[action.questionID].question = action.value;
      return {...state, questionnaire: {...state.questionnaire, questions: newQuestions}};
    }

    case SET_ANSWER: {
      const newQuestions = [...state.questionnaire.questions];
      newQuestions[action.questionID].answers[action.answerID].label = action.value;
      return {...state, questionnaire: {...state.questionnaire, questions: newQuestions}};
    }

    case REMOVE_QUESTION: {
      const newQuestions = [...state.questionnaire.questions];
      newQuestions.splice(action.questionID, 1);
      newQuestions.forEach((question, index) => question.id = index);
      return {...state, questionnaire: {...state.questionnaire, questions: newQuestions}};
    }

    case REMOVE_ANSWER: {
      const newQuestions = [...state.questionnaire.questions];
      newQuestions[action.questionID].answers.splice(action.answerID, 1);
      return {...state, questionnaire: {...state.questionnaire, questions: newQuestions}};
    }

    case CHANGE_QUESTIONS_ORDER: {
      const newQuestions = [...state.questionnaire.questions];
      const source = action.sourceID;
      const dest = action.destinationID;
      [newQuestions[source], newQuestions[dest]] = [newQuestions[dest], newQuestions[source]];
      newQuestions.forEach((question, index) => question.id = index);
      return {...state, questionnaire: {...state.questionnaire, questions: newQuestions}};
    }

    default: return state;
  }
}