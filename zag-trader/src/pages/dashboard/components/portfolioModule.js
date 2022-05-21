import ModuleTemplate from "./moduleTemplate";
import {FaCreativeCommonsSa, FaPlus}  from 'react-icons/fa';
import CustomSecondaryButton from "../../components/customSecondaryButton";


function PortfolioModule(){
    return(
        <div style={{gridArea: 'portfolio'}}>
            <ModuleTemplate 
            icon={<FaCreativeCommonsSa size={24}/>} 
            title='Copy-trading | Portfolio ' 
            summery = '0'
            button={<CustomSecondaryButton> <FaPlus size={14}/> <span className="btn-fold">Open new following</span> </CustomSecondaryButton>}
            onboardingTitle ='Make profits with top traders!'
            onboardingTagline ='Covesting Copy-trading Module allows you to automatically copy the trades of the best performing traders'
            onboardingAction='Get started'
            pic='https://primexbt.com/my/cov-portfolio.f7f0cfc73f1fc289.svg'
            >
            </ModuleTemplate>
        </div>
    );
}
export default PortfolioModule;