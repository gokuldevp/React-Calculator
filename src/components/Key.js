function Key(props) {
  const handleClick = () => {
    props.onClick(props.value);
  };

  return (
    <button onClick={handleClick} className="keys">
      <h3>{props.value}</h3>
    </button>
  );
}

export default Key;