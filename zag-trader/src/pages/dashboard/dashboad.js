import './dashboard.css';
import TotalFunds from './components/totalFunds';
import Banner from './components/banner';
import WalletModule from './components/walletModule';
import MarginModule from './components/marginModule';
import YieldModule from './components/yieldModule';
import PortfolioModule from './components/portfolioModule';
import StratigesModule from './components/stratigesModule';
import ContestsModule from './components/contestsModule';

import {FaHome, FaChartBar, FaArtstation, FaBitcoin, FaAward}  from 'react-icons/fa';


function Dashboard() {
    return (
    <body>
        <div>
            <di className='mainmenu'>
                <div className='mainmenue-logo'></div>
                <ul>
                    <li><a class="active" href="/"><FaHome size={24}/> &nbsp; Main</a></li>
                    <li><a href="/"><FaChartBar size={24}/> &nbsp;Margin</a></li>
                    <li><a href="/"><FaBitcoin size={24}/> &nbsp;Buy crypto</a></li>
                    <li><a href="/"><FaArtstation size={24}/> &nbsp;Yield</a></li>
                    <li><a href="/"><FaAward size={24}/> &nbsp; Contests</a></li>
                </ul>
            </di>
            <div className ='dashboardGrid'>
            <TotalFunds/>
            <Banner/>
            <WalletModule/>
            <MarginModule/>  
            <YieldModule/> 
            <PortfolioModule/> 
            <StratigesModule/>
            <ContestsModule/>
            </div>
        </div>
    </body>
    );
}

export default Dashboard;
