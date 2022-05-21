import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import CustomInput from "../components/customInput";
import CustomButtonPrimary from "../../components/customPrimaryButton";
import { useEffect } from "react";

function LoginForm() {

  useEffect(() => {
    document.title = 'sign-in';
  });

  const navigate = useNavigate();
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [showError, setShowError] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowError(inputs.email === "" || inputs.password === "");
    if (inputs.email !== "" && inputs.password !== "") {
      navigate("/dashboard");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="sign-template-card-header">Login</div>
      <div className="sign-template-text">
        New to PrimeXBT?{" "}
        <Link to="/sign-up" className="link">
          Register
        </Link>
      </div>
      <CustomInput
        type="text"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />
      <CustomInput
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />
      {showError && (
        <p style={{ color: "red", fontSize: 14, marginBottom: 30 }}>
          Wrong email or password!
        </p>
      )}
      <Link
        to="/"
        className="sign-template-text link"
        style={{ display: "inline-block", marginBottom: 30 }}
      >
        Forgot password?
      </Link>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <CustomButtonPrimary type="submit" disabled={false}>
          {" "}
          Log in{" "}
        </CustomButtonPrimary>
      </div>
    </form>
  );
}

export default LoginForm;
