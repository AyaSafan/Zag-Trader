import './modal.css'
import { useState } from 'react';
import CustomPrimaryButton from '../../components/customPrimaryButton';

function Modal(){
    const [show, setShow] = useState(true);
    const handleClick = e => {
        setShow(false);
    }
    return(
        <>{show &&
            <div id="myModal" class="modal">
                <div class="modal-content">
                    <div class="modal-header">
                    <span class="close" onClick={handleClick}>&times;</span>
                    <h2>Fund your account</h2>
                    </div>
                    <div class="modal-body">
                    <h2>Make a deposit and start trading!</h2>
                    <img src='https://primexbt.com/my/assets/guide/deposit.png?v2' alt='modal-pic'></img>
                    <p>To start trading with leverage and access all the platform's features, you will first need to make a deposit to your personal Wallet.</p>
                    <CustomPrimaryButton>Deposite</CustomPrimaryButton>
                    </div>
                </div>
        
            </div>
        }</>
    );
}

export default Modal;