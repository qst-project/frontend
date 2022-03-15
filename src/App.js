import { Route, Router, Routes } from 'react-router-dom';
import * as comp from './components';

function App() {
  return (
    <>
      <comp.Background/>
      <comp.Header/>
      <div className='container mx-auto'>
        <Routes>
          <Route path='/' element={<comp.Quest/>}/>
          <Route path='*' element={<></>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;