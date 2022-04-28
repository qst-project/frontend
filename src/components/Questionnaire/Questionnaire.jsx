import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCheckboxAC, selectRadioAC } from '../../redux/actions';
import BtnSubmit from '../UI/BtnSubmit/BtnSubmit';
import CheckboxQuestion from './CheckboxQuestion/CheckboxQuestion';
import RadioQuestion from './RadioQuestion/RadioQuestion';

import { QuestionnaireServiceClient } from '../../proto/questionnaire_grpc_web_pb';
import {GetQuestionnaireRequest} from "../../proto/questionnaire_pb"

// const client = new QuestionnaireClient(
//   "http://localhost:8081",
//   null,
//   null
// )


const client = new QuestionnaireServiceClient("http://0.0.0.0:8080",  null, null)


const Questionnaire = () => {
  const state = useSelector((state) => state.questionnaire);
  const {questions, title} = state;
  const dispatch = useDispatch();

  const selectCheckbox = (questionID, answerID) => {
    dispatch(selectCheckboxAC(questionID, answerID));
  }

  const selectRadio = (questionID, answerID) => {
    dispatch(selectRadioAC(questionID, answerID))
  }

  const handler = () => {
    const request = new GetQuestionnaireRequest();
  
    request.setRef("TestRef")
    // var metadata = { 'Content-type': 'application/grpc-web-text+proto' };
    // request.Header.Set("content-type", "application/grpc-text")
    console.log(request)
    client.getQuestionnaire(request, {}, (err, response) => {
      console.log(err);
      console.log(response)
    })
    // `console.log(request)
  }

  return (
    <div className='w-full flex flex-col items-center'>
      <h2 style={{textShadow: '6px 5px 10px rgba(0, 0, 0, 0.27)'}} className='text-lg text-white uppercase tracking-[18px] text-center mt-24'>{title}</h2>
      <div className='w-full mt-24'>
        {questions.map(question => {
          switch (question.type) {
            case 'radio':
              return <RadioQuestion selectRadio={selectRadio} question={question} questionID={question.id} key={question.id}/>
            case 'checkbox':
              return <CheckboxQuestion selectCheckbox={selectCheckbox} question={question} questionID={question.id} key={question.id}/>
          }
        })}
      </div>

      <div>
        <button onClick={handler}>Click</button>
      </div>
        
      <BtnSubmit>Submit</BtnSubmit>
    </div>
  );
};

export default Questionnaire;