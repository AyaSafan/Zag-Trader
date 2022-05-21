import './dashboard.css';
import TotalFunds from './components/totalFunds';
import WalletModule from './components/walletModule';
import MarginModule from './components/marginModule';
import YieldModule from './components/yieldModule';
import PortfolioModule from './components/portfolioModule';
import StratigesModule from './components/stratigesModule';
import ContestsModule from './components/contestsModule';
import TopNav from './components/topNav';
import SideBar from './components/sideBar';

import Modal from './components/modal';
import BannerSlide from './components/bannerSlides';

function Dashboard() {
    return (
    <body>
        <Modal/>
        <div>
            <TopNav/>            
            <SideBar/>

            <div className ='dashboardGrid'>
            <TotalFunds/>
            <BannerSlide/>
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
