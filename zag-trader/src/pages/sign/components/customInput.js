import "./customInput.css";

function CustomInput(props) {
  return (
    <input
      className="form-control"
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
}
export default CustomInput;
