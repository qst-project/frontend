import { BrowserRouter, Route } from "react-router-dom";
import Background from "./components/background/Background";
import Header from "./components/header/Header";
import Quest from "./components/questionnaire/Quest";
import './main.scss';

function App() {
  return (
    <BrowserRouter>
      <Background/>
      <Header/>
      <div className='container'>
        <Quest/>
      </div>
    </BrowserRouter>
  );
}

export default App;