import './App.css';
import DisplayCounter from './Components/DisplayCounter';
import Increments from './Components/Increments';
import Add from './Components/Math';
import RandomPhoto from './Components/RandomPhoto';

function App() {
  return (
    <div className="App">
      <RandomPhoto />
      <DisplayCounter />
      <Increments />
      <Add />
    </div>
  );
}

export default App;
