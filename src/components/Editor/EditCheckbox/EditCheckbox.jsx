import React, { useEffect } from 'react';
import EditCheckboxAnswer from './EditCheckboxAnswer/EditCheckboxAnswer';
import {ReactComponent as PlusIcon} from '../../../icons/plus.svg';
import ReactTooltip from 'react-tooltip';

const EditCheckbox = ({question, addAnswer}) => {
  useEffect(() => {
    ReactTooltip.rebuild();
  })

  return (
    <div className='my-gradient-box w-full mb-10 p-9 rounded-[33px]'>
      <div className='my-light-gradient rounded-[33px]'></div>
      <div className='my-dark-gradient rounded-[33px]'></div>

      <input type='text' placeholder='Your question...' 
      className='px-4 h-10 mb-6 w-full bg-blue-006 rounded-xl text-base text-light-text-1 focus:outline focus:outline-1 focus:outline-light-text-1'></input>
      
      <div className='flex flex-col items-start'>
        {question.answers.map((answer, index) => (<EditCheckboxAnswer key={index} answer={answer}/>))}
        <button onClick={() => addAnswer(question.id)} data-tip='Add new answer' data-for='global-tip' className='group p-2 bg-blue-006 rounded-xl'>
          <PlusIcon className='fill-light-text-2 group-hover:fill-light-text-1 w-6 h-6'></PlusIcon>
        </button>
      </div>
    </div>
  );
};

// CheckboxQuestion.propTypes = {
//   question: propTypes.shape({
//     type: propTypes.string,
//     id: propTypes.number,
//     question: propTypes.string,
//     answers: propTypes.array
//   }),
//   selectCheckbox: propTypes.func,
//   questionID: propTypes.number
// }

export default EditCheckbox;