import ModuleTemplate from "./moduleTemplate";
import {FaArtstation, FaPlus}  from 'react-icons/fa';
import CustomSecondaryButton from "../../components/customSecondaryButton";


function MarginModule(){
    return(
        <div style={{gridArea: 'margin'}}>
            <ModuleTemplate 
            icon={<FaArtstation/>} 
            title='Margin Trading' 
            button={<CustomSecondaryButton> <FaPlus size={14}/> Open new account</CustomSecondaryButton>}
            onboardingTitle ='Open new Margin account!'
            onboardingTagline ='You can open additional Margin accounts USDC, ETH, USDT in  and other currencies'
            onboardingAction='New account'
            >
            </ModuleTemplate>
        </div>
    );
}
export default MarginModule;