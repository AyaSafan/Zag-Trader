import "./footer.css";
import ssl from "../../../assets/ssl.svg";
import amazon from "../../../assets/amazon.svg";

function Footer() {
  return (
    <div>
      <img src={ssl} className="ssl" alt="ssl"></img>
      <img src={amazon} className="amazon" alt="amazon"></img>
    </div>
  );
}
export default Footer;
