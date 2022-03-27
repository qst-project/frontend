import { Route, Routes } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import * as comp from './components';

function App() {
  return (
    <>
      <ReactTooltip id='global-tip' place='bottom' type='light' effect='solid' delayShow={300} className='tooltip-light'/>
      <ReactTooltip id='add-question-tip' place='bottom' type='light' effect='solid' delayShow={300} offset={{bottom: 16}} className='tooltip-light'/>
      <comp.Background/>
      <comp.Header/>
      <div className='container mx-auto'>
        <Routes>
          <Route path='/' element={<comp.Quest/>}/>
          <Route path='/editor' element={<comp.Editor/>}/>
          <Route path='*' element={<></>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;