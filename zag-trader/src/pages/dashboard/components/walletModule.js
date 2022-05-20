import ModuleTemplate from "./moduleTemplate";
import {FaRegMoneyBillAlt}  from 'react-icons/fa';


function WalletModule(){
    return(
        <div style={{gridArea: 'wallet'}}>
            <ModuleTemplate 
            icon={<FaRegMoneyBillAlt size={24}/>} 
            title='Wallet' 
            button={<div></div>}
            >
            </ModuleTemplate>
        </div>
    );
}
export default WalletModule;