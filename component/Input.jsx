import "./Input.css";

function Input(props) {
  return (
    <input
      className="input"
      type={props.type}
      onChange={props.onChange}
      placeholder={props.placeholder}
      value={props.value}
    />
  );
}

export default Input;
