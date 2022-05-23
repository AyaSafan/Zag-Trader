import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import validator from 'validator'

import PolicyCheck from "../components/policyCheck";
import CustomInput from "../components/customInput";
import CustomButton from "../../components/customPrimaryButton";

function RegisterForm() {

  useEffect(() => {
    document.title = 'sign-in';
  });

  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    policyChecked: false,
  });

  const [emailError, setEmailError] = useState(false)
  const [emailErrorMsg, setEmailErrorMsg] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value

    if(email.length ===0){
      setEmailError(true)
      setEmailErrorMsg('  Email is required')
    }
  
    if (validator.isEmail(email)) {
      setEmailError(false)
    } else {
      setEmailError(true)
      setEmailErrorMsg('  Enter correct email')

    }
  }

  const [passwordError, setPasswordError] = useState(false)
  const [passwordErrorMsg, setPasswordErrorMsg] = useState('')
  const validatePassword = (e) => {
    var password = e.target.value
    
    if(password.length ===0){
      setPasswordError(true)
      setPasswordErrorMsg('  Password is required')
    }
  
    if (validator.isStrongPassword(password)) {
      setPasswordError(false)
    } else {
      setPasswordError(true)
      setPasswordErrorMsg(' Password must contain: 8 symbols, 1 upper-case, 1 lower-case and 1 digit')
    }
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleCheck = (event) => {
    const name = event.target.name;
    const value = event.target.checked;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const [enabledSubmit, setEnabledSubmit] = useState(false);

  useEffect(() => {
    setEnabledSubmit(
      !emailError && !passwordError && inputs.policyChecked
    );
  }, [inputs, emailError, passwordError]);

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/sign-in");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="sign-template-card-header">Register</div>
      <div className="sign-template-text">
        Already have an account?{" "}
        <Link to="/sign-in" className="link">
          Login
        </Link>
      </div>
      <CustomInput
        type="text"
        name="email"
        placeholder="Email *"
        onChange={e=>{handleChange(e); validateEmail(e);}}
        error={emailError}
        errorMsg ={emailErrorMsg}
      />
      <br/>
      <CustomInput
        type="password"
        name="password"
        placeholder="Password *"
        onChange={e=>{handleChange(e); validatePassword(e);}}
        error={passwordError}
        errorMsg ={passwordErrorMsg}
      />
      <br/>
      <PolicyCheck onChange={handleCheck} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <CustomButton type="submit" disabled={!enabledSubmit}>
          {" "}
          Register{" "}
        </CustomButton>
      </div>
    </form>
  );
}

export default RegisterForm;
