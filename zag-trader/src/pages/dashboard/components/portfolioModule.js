import ModuleTemplate from "./moduleTemplate";
import {FaChartBar, FaPlus}  from 'react-icons/fa';
import CustomSecondaryButton from "../../components/customSecondaryButton";


function PortfolioModule(){
    return(
        <div style={{gridArea: 'portfolio'}}>
            <ModuleTemplate 
            icon={<FaChartBar size={24}/>} 
            title='Copy-trading | Portfolio ' 
            button={<CustomSecondaryButton> <FaPlus size={14}/> Open new following</CustomSecondaryButton>}
            onboardingTitle ='Make profits with top traders!'
            onboardingTagline ='Covesting Copy-trading Module allows you to automatically copy the trades of the best performing traders'
            onboardingAction='Get started'
            >
            </ModuleTemplate>
        </div>
    );
}
export default PortfolioModule;