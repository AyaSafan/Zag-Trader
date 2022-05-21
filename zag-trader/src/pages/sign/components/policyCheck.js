import "./policyCheck.css";
import { Link } from "react-router-dom";

function PolicyCheck(props) {
  return (
    <div className="checkbox-container">
      <input type="checkbox" name="policyChecked" onChange={props.onChange} />
      <label className="checkbox-label">
        I accept the{" "}
        <Link to="/" className="link">
          Terms of Conditions
        </Link>{" "}
        and{" "}
        <Link to="/" className="link">
          Privacy Policy
        </Link>
      </label>
    </div>
  );
}

export default PolicyCheck;
