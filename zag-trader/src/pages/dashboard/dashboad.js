import './dashboard.css';
import TotalFunds from './components/totalFunds';
import Banner from './components/banner';
import MarginModule from './components/marginModule';
import YieldModule from './components/yieldModule';
import PortfolioModule from './components/portfolioModule';

function Dashboard() {
    return (
    <body>
        <div className ='dashboardGrid'>
        <TotalFunds/>
        <Banner/>
        <MarginModule/>  
        <YieldModule/> 
        <PortfolioModule/> 
        </div>
    </body>
    );
}

export default Dashboard;
