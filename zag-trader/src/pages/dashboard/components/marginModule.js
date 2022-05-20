import ModuleTemplate from "./moduleTemplate";
import {FaChartBar, FaPlus}  from 'react-icons/fa';
import CustomSecondaryButton from "../../components/customSecondaryButton";


function MarginModule(){
    return(
        <div style={{gridArea: 'margin'}}>
            <ModuleTemplate 
            icon={<FaChartBar size={24}/>} 
            title='Margin Trading' 
            button={<CustomSecondaryButton> <FaPlus size={14}/> Open new account</CustomSecondaryButton>}
            onboardingTitle ='Open new Margin account!'
            onboardingTagline ='You can open additional Margin accounts USDC, ETH, USDT in  and other currencies'
            onboardingAction='New account'
            pic='https://primexbt.com/my/margin-mobile.142711b20ff9c98d.svg'
            >
            </ModuleTemplate>
        </div>
    );
}
export default MarginModule;