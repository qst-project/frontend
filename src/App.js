import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorFallback/ErrorFallback';
import { Route, Routes } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import * as comp from './components';

function App() {
  // const func = (a) => {
  //   a.b.c = 4;
  // }

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
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
        {/* <button onClick={() => func({})}>ERROR</button> */}
      </div>
    </ErrorBoundary>
  );
}

export default App;