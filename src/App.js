import './styles/App.css';
import {useState} from 'react';
import { Screen, Keyboard } from './components';

function App() {
  const [text, setText] = useState([""]);

  const handleKeyClick = (value) => {
    const operators = ["%", "/", "*", "-", "+", "."];

    if (operators.includes(text[text.length - 1]) && operators.includes(value)) {
      return setText(text);
    }
    
    if(value === "C") {
      return setText("")
    } else if(value === "=") {
      return setText((prevText) => eval(prevText))
    } else if(value === "+/-"){
      return setText((prevText) => eval(prevText)*-1)
    }
    return setText((prevText) => prevText + value);
  };


  return (
    <div className="App">
      <Screen text={text} />
      <Keyboard onClick={handleKeyClick} />
    </div>
  );
}

export default App;