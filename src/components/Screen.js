function Screen(props) {
    return (
      <div>
            <input type="text" className="screen" value={props.text} disabled></input>
      </div>
    );
  }
  
export default Screen;