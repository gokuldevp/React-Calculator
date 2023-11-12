import { Key } from "./";

function Keyboard(props) {
  const keys = ["C", "+/-", "%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="];

  return (
    <div className="keyboard">
      {keys.map((key) => (
        <Key key={key} value={key} onClick={props.onClick} />
      ))}
    </div>
  );
}

export default Keyboard;