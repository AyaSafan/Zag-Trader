import "./customButton.css";

function CustomSecondaryButton(props) {
  return (
    <button
      className="customButton customSecondaryButton"
      type={props.type}
      disabled={props.disabled}
    >
      {" "}
      {props.children}{" "}
    </button>
  );
}
export default CustomSecondaryButton;
