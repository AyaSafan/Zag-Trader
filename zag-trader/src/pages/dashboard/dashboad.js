import './dashboard.css';
import TotalFunds from './components/totalFunds';
import Banner from './components/banner';
import MarginModule from './components/Modules/marginModule';
import YieldModule from './components/Modules/yieldModule';

function Dashboard() {
    return (
    <body>
        <div className ='dashboardGrid'>
        <TotalFunds/>
        <Banner/>
        <MarginModule/>  
        <YieldModule/>  
        </div>
    </body>
    );
}

export default Dashboard;
