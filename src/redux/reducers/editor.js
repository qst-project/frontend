import { handleActions } from 'redux-actions';
import {
  addAnswerAC,
  addQuestionAC,
  changeQuestionsOrderAC,
  removeAnswerAC,
  removeQuestionAC,
  setAnswerAC,
  setQuestionAC
} from '@actions/editor';

const INITIAL_STATE = {
  questionnaire: {
    title: 'My survey',
    questions: [
      {
        type: 'radio',
        id: 0,
        question: '',
        answers: [
          { label: '' }
        ]
      },

      {
        type: 'checkbox',
        id: 1,
        question: '',
        answers: [
          { label: '' }
        ]
      },

      {
        type: 'text',
        id: 2,
        question: '',
        answer: ''
      }
    ]
  }
}

export default handleActions({
  [addQuestionAC](state, action) {
    console.log(action)
    const newQuestions = [...state.questionnaire.questions];
    let question = {};
    switch (action.payload.type) {
      case 'checkbox': {
        question = {
          type: action.payload.type,
          question: '',
          answers: []
        };
        break;
      }
      case 'radio': {
        question = {
          type: action.payload.type,
          question: '',
          answers: []
        };
        break;
      }
      case 'text': {
        question = {
          type: action.payload.type,
          question: ''
        };
        break;
      }
    }
    question.id = state.questionnaire.questions.length;
    newQuestions.push(question);
    return { ...state, questionnaire: { ...state.questionnaire, questions: newQuestions } };
  },
  [addAnswerAC](state, action) {
    const newQuestions = [...state.questionnaire.questions];
    newQuestions[action.payload.questionID].answers.push({
      label: ''
    });
    return { ...state, questionnaire: { ...state.questionnaire, questions: newQuestions } };
  },
  [setQuestionAC](state, action) {
    const newQuestions = [...state.questionnaire.questions];
    console.log(action)
    newQuestions[action.payload.questionID].question = action.payload.value;
    return { ...state, questionnaire: { ...state.questionnaire, questions: newQuestions } };
  },
  [setAnswerAC](state, action) {
    const newQuestions = [...state.questionnaire.questions];
    newQuestions[action.payload.questionID].answers[action.payload.answerID].label = action.payload.value;
    return { ...state, questionnaire: { ...state.questionnaire, questions: newQuestions } };
  },
  [removeQuestionAC](state, action) {
    const newQuestions = [...state.questionnaire.questions];
    newQuestions.splice(action.payload.questionID, 1);
    newQuestions.forEach((question, index) => question.id = index);
    return { ...state, questionnaire: { ...state.questionnaire, questions: newQuestions } };
  },
  [removeAnswerAC](state, action) {
    const newQuestions = [...state.questionnaire.questions];
    newQuestions[action.payload.questionID].answers.splice(action.payload.answerID, 1);
    return { ...state, questionnaire: { ...state.questionnaire, questions: newQuestions } };
  },
  [changeQuestionsOrderAC](state, action) {
    const newQuestions = [...state.questionnaire.questions];
    const source = action.payload.sourceID;
    const dest = action.payload.destinationID;
    [newQuestions[source], newQuestions[dest]] = [newQuestions[dest], newQuestions[source]];
    newQuestions.forEach((question, index) => question.id = index);
    return { ...state, questionnaire: { ...state.questionnaire, questions: newQuestions } };
  }
}, INITIAL_STATE)