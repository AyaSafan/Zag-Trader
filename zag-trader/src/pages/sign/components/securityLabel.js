import './securityLabel.css';
import { FaLock } from 'react-icons/fa';


function SecurityLabel(){
    return(
        <div className='security-label-container'>
           <FaLock size={24}/> &nbsp;  We take the protection of your data seriously
        </div>
    );
}

export default SecurityLabel;