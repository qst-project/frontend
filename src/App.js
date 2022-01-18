import { BrowserRouter, Route } from "react-router-dom";
import * as comp from './components';

function App() {
  return (
    <BrowserRouter>
      <comp.Background/>
      <comp.Header/>
      <div className='container mx-auto'>
        <comp.Quest/>
      </div>
    </BrowserRouter>
  );
}

export default App;