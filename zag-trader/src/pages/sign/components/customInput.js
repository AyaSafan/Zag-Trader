import "./customInput.css";

function CustomInput(props) {

  function animateLabel(e){
    e.target.parentElement.classList.add('focused');
    
      var inputValue = e.target.value;
      if ( inputValue === "" ) {
        e.target.parentElement.classList.remove('focused');  
      } 

    console.log('animaet')

  }

  return (
    <div className="form-group">
    <label className={props.error? "form-label form-label-error": "form-label"}>{props.placeholder}</label>
    <input
      className={props.error? "form-input form-input-error": "form-input"}
      type={props.type}
      name={props.name}
      onChange={props.onChange}
      onFocus={e => e.target.parentElement.classList.add('focused')}
      onBlur={e=> animateLabel(e)}
    />
    <div className="error-div">
      <label className="error-msg">{ props.error && props.errorMsg}</label>
    </div>
    </div>
  );
}
export default CustomInput;
