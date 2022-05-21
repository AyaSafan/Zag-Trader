import './moduleTemplate.css'
import { useState } from 'react';

import CustomCard from '../../components/customCard';
import {FaAngleDown, FaAngleUp, FaTimes}  from 'react-icons/fa';
import CustomPrimaryButton from '../../components/customPrimaryButton';

function ModuleTemplate(props){
    const [show, setShow] = useState(true);

    const handleClick = e => {
        /*e.preventDefault();*/
        setShow(!show);
    }

           

    return(
        <CustomCard>
            <div className='customCard-header' > 
                <div className='customCard-header-title' onClick={handleClick}> {props.icon} &nbsp; &nbsp; <span> {props.title}</span> &nbsp; {show? <FaAngleDown size={24}/> : <FaAngleUp size={24}/>}  </div>
                {props.summery ? <div className='customCard-header-summery'> <div>Total equity</div> <div style={{color:'#fff'}}>≈ {props.summery} USD</div></div>: <div></div>}
                <div className='customCard-header-action'>{show && props.button}</div>
            </div>
            {show && props.children}
            {show && props.onboardingTitle && 
            <div className="onboardingBanner">
                <div className='onboardingBanner-pic' style={ {background:`url(${props.pic}) no-repeat`}}></div>
                <div className="onboardingBanner-message">
                    <h2>{props.onboardingTitle}</h2>
                    <h5>{props.onboardingTagline}</h5>
                </div>
                <div className="onboardingBanner-actionButton">
                    <CustomPrimaryButton>{props.onboardingAction}</CustomPrimaryButton>
                </div>
                <div className="onboardingBanner-close"><FaTimes color="#ccc" size={18}/></div>    
            </div>
            }
            
        </CustomCard>
    );
}

export default ModuleTemplate;