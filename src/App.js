import { BrowserRouter, Route } from "react-router-dom";
import * as comp from './components';
import './main.scss';

function App() {
  return (
    <BrowserRouter>
      <comp.Background/>
      <comp.Header/>
      <div className='container'>
        <comp.Quest/>
      </div>
    </BrowserRouter>
  );
}

export default App;