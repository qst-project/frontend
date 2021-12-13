import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Home/>
      </div>
    </BrowserRouter>
  );
}

export default App;