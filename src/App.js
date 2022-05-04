import { ErrorBoundary } from 'react-error-boundary';
import { Route, Routes } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

import ErrorFallback from '@components/ErrorFallback/ErrorFallback';
import * as components from '@components';
import * as pages from '@pages';

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ReactTooltip id='global-tip' place='bottom' type='light' effect='solid' delayShow={300} className='tooltip-light'/>
      <ReactTooltip id='add-question-tip' place='bottom' type='light' effect='solid' delayShow={300} offset={{bottom: 16}} className='tooltip-light'/>
      <components.Background/>
      <components.Header/>
      <div className='container mx-auto'>
        <Routes>
          <Route path='/home' element={<pages.Home/>}/>
          <Route path='/*' element={<pages.Questionnaire/>}/>
          <Route path='/editor' element={<pages.Editor/>}/>
          {/* <Route path='*' element={<></>}/> */}
        </Routes>
        {/* <button onClick={() => func({})}>ERROR</button> */}
      </div>
    </ErrorBoundary>
  );
}

export default App;