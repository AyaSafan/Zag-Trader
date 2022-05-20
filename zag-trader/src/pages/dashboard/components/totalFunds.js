import './totalFunds.css'
import CustomCard from "../../components/customCard";
import CustomPrimaryButton from "../../components/customPrimaryButton"
import CustomSecondaryButton from '../../components/customSecondaryButton';
import {FaInfoCircle}  from 'react-icons/fa';

function TotalFunds(){
    return(
        <div className='funds'>
        <CustomCard>
            <div className='customCard-header' > <div> <span> Total Funds</span> <FaInfoCircle size={18}/> </div></div>
            <div className='customCard-content'>
            <div className='funds-value'>≈ 0 USD</div>
            <div className='actions'>
                <CustomSecondaryButton> Exchange </CustomSecondaryButton>
                <CustomPrimaryButton> Deposite </CustomPrimaryButton>
            </div>
            </div>
        </CustomCard>
        </div>
    );

}
export default TotalFunds;