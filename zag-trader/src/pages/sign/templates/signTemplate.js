import './signTemplate.css';

import { Outlet } from "react-router-dom";
import Footer from '../components/footer';
import Logo from '../components/logo';
import SecurityLabel from '../components/securityLabel';

function SignTemplate() {
    return (
    <div className="zagBacground">
        <div className='sign-template-container'>
            <Logo/>
            <div className='sign-template-content'>
                <div className='sign-template-card'>
                    <Outlet />
                <SecurityLabel/>
                </div>
                <Footer/>
            </div>
        </div>
    </div>
    );
}

export default SignTemplate;
