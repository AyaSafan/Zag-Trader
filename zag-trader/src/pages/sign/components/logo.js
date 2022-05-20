import './logo.css';
import logo from '../../../assets/logo.svg';

function Logo() {
    return <a className="logo" href='/'><img src={logo} className='logo-img' alt="Logo" /></a>;
}
export default Logo;