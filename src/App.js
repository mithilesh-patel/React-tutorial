
import './App.css';
import Newcomponent from './components/Newcomponent';
import Form from './components/Form';
import Conditional from './components/Conditional';
import { Wo, Nhi } from "./components/Wo";



function App() {
  return (
    <div className="App">
      <Conditional />
      <h1>Hello World </h1>
      <p>This is a para tag</p>
      <Newcomponent text="Mithilesh" />

      <Wo />
      <Form />

      <Nhi name="Virat" surname="Kohli" email="Virat@gmail.com" other={{ address: "Delhi", mob: "12345" }} />


      <Nhi name="Anil" surname="Kumble" email="anil@gmail.com" other={{ address: "Delhi", mob: "12345" }} />
    </div>
  );
}

export default App;
