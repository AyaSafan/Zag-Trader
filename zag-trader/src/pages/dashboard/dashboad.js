import './dashboard.css';
import TotalFunds from './components/totalFunds';
import Banner from './components/banner';
import WalletModule from './components/walletModule';
import MarginModule from './components/marginModule';
import YieldModule from './components/yieldModule';
import PortfolioModule from './components/portfolioModule';
import StratigesModule from './components/stratigesModule';
import ContestsModule from './components/contestsModule';

function Dashboard() {
    return (
    <body>
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
    </body>
    );
}

export default Dashboard;
