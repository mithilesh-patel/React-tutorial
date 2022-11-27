
import './App.css';
import Newcomponent from './components/Newcomponent';
import { Nhi} from "./components/Wo";



function App() {
  return (
    <div className="App">
      <h1>Hello World </h1>
      <p>This is a para tag</p>
      <Newcomponent text="Mithilesh" />


      
              
      <Nhi name ="Virat" surname= "Kohli" email="Virat@gmail.com" other={{address : "Delhi", mob :"12345"}}/>
      

      <Nhi name="Anil" surname= "Kumble" email="anil@gmail.com" other={{address : "Delhi", mob :"12345"}}/>
    </div>
  );
}

export default App;
