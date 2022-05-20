import './dashboard.css';
import TotalFunds from './components/totalFunds';
import Banner from './components/banner';
import WalletModule from './components/walletModule';
import MarginModule from './components/marginModule';
import YieldModule from './components/yieldModule';
import PortfolioModule from './components/portfolioModule';
import StratigesModule from './components/stratigesModule';
import ContestsModule from './components/contestsModule';
import TopNav from './components/topNav';



function Dashboard() {
    return (
    <body>
        <div>
            <TopNav/>
            
            <nav className='mobile-nav2'>
                <a href='/' className='active'> Dashboard </a>
                <a href='/'> Buy crypto </a>
                <a href='/'> Promo codes </a>
                <a href='/'> Referrels </a>
                <a href='/'> Reports </a>
                <a href='/'> Settings </a>
            </nav>
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
