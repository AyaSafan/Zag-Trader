import ModuleTemplate from "./moduleTemplate";
import {FaCreativeCommonsSa, FaPlus}  from 'react-icons/fa';
import CustomSecondaryButton from "../../components/customSecondaryButton";


function StratigesModule(){
    return(
        <div style={{gridArea: 'strategies'}}>
            <ModuleTemplate 
            icon={<FaCreativeCommonsSa size={24}/>} 
            title='Copy-trading | My Strategies ' 
            button={<CustomSecondaryButton> <FaPlus size={14}/><span className="btn-fold"> Open new stratgy</span></CustomSecondaryButton>}
            onboardingTitle ='Earn additional income!'
            onboardingTagline ='Start your own Covesting Copy-trading Strategy and earn success fees from profitable trading'
            onboardingAction='Get started'
            pic='https://primexbt.com/my/cov-strategies.3c6e3e9154df7983.svg'
            >
            </ModuleTemplate>
        </div>
    );
}
export default  StratigesModule;