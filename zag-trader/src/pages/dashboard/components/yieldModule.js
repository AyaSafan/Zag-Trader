import ModuleTemplate from "./moduleTemplate";
import {FaArtstation, FaPlus}  from 'react-icons/fa';
import CustomSecondaryButton from "../../components/customSecondaryButton";


function YieldModule(){
    return(
        <div style={{gridArea: 'yield'}}>
            <ModuleTemplate 
            icon={<FaArtstation  size={24}/>} 
            title='Yield Control' 
            button={<CustomSecondaryButton> <FaPlus size={14}/> Start earning</CustomSecondaryButton>}
            onboardingTitle ='Earn up to 14% interest!'
            onboardingTagline ='Start earning high returns on your crypto with Covesting Yield Account.'
            onboardingAction='Start earning'
            pic='https://primexbt.com/my/cov-yield.875d03a81a9cb1ce.png'
            >
            </ModuleTemplate>
        </div>
    );
}
export default YieldModule;