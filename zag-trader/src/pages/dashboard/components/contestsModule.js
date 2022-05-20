import ModuleTemplate from "./moduleTemplate";
import {FaAward, FaPlus}  from 'react-icons/fa';
import CustomSecondaryButton from "../../components/customSecondaryButton";


function ContestsModule(){
    return(
        <div style={{gridArea: 'contests'}}>
            <ModuleTemplate 
            icon={<FaAward size={24}/>} 
            title='Contests ' 
            button={<CustomSecondaryButton> <FaPlus size={14}/> Join contest</CustomSecondaryButton>}
            onboardingTitle ='Join Contest &amp; Win $$!'
            onboardingTagline ='Free virtual funds are provided to all participants.'
            onboardingAction='Join now'
            pic='https://primexbt.com/my/competitions.4e0dd32dfa865dfc.png'
            >
            </ModuleTemplate>
        </div>
    );
}
export default  ContestsModule;