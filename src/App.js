
import './App.css';
import Newcomponent from './components/Newcomponent';
import Form from './components/Form';
import Conditional from './components/Conditional';
import Wo from "./components/Wo";
import Nhi from "./components/Nhi";
import Navbar from "./components/Navbar";
import Home from "./components/Home";


import { BrowserRouter, Route, Routes } from "react-router-dom"
// import { Switch } from "react-router-dom"


function App() {
  return (<BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/conditional" element={<Conditional />} />
        <Route path="/form" element={<Form />} />
        <Route path="/newcomponent" element={<Newcomponent />} />
        {/* <Route path="/nhi" element={<Nhi name="Virat" surname="Kohli" email="Virat@gmail.com" other={{ address: "Delhi", mob: "12345" }} />} /> */}
        <Route path="/nhi" element={<Nhi name="Anil" surname="Kumble" email="anil@gmail.com" other={{ address: "Delhi", mob: "12345" }} />} />
        <Route path="/wo" element={<Wo />} />
        <Route path="/*" element={<h1>Error 404 Page not found</h1>} />
        
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
