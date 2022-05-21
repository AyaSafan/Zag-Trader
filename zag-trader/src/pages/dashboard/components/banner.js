import "./banner.css";
import { Link } from "react-router-dom";

function Banner(props) {
  return (
    <div
      className="bannerCard"
      style={{ backgroundImage: `url(${props.pic})` }}
    >
      <div className="bannerCard-content">
        <div className="bannerCard-text">
          <label className="bannerCard-header">{props.header}</label>
          <div> {props.text}</div>
        </div>
        <Link to="/dashboard" className="linkButton">
          {props.button}
        </Link>
      </div>
    </div>
  );
}

export default Banner;
