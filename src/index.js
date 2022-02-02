import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const defaultState = {
  questions: [
    {
      type: 'radio',
      id: '1',
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
      id: '2',
      question: 'What did you like our company?',
      answers: [
        {label: 'Salary', checked: false},
        {label: 'Working conditions', checked: false},
        {label: 'Opportunity for career growth', checked: false},
      ]
    },
  ]
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {

    default: return state;
  }
}

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);