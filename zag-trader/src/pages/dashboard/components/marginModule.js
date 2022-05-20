import ModuleTemplate from "./moduleTemplate";
import {FaChartBar, FaPlus}  from 'react-icons/fa';
import CustomPrimaryButton from "../../components/customPrimaryButton";
import CustomSecondaryButton from "../../components/customSecondaryButton";


function MarginModule(){
    const accounts=[
        {
            currencyIcon:'https://primexbt.com/my/assets/icons/currency/btc.svg',
            currency:'Bitcoin',
            unit:'BTC',
            balance:0,
            margin:0
        },        
    ]
    return(
        <div style={{gridArea: 'margin'}}>
            <ModuleTemplate 
            icon={<FaChartBar size={24}/>} 
            title='Margin Trading' 
            button={<CustomSecondaryButton> <FaPlus size={14}/> Open new account</CustomSecondaryButton>}
            onboardingTitle ='Open new Margin account!'
            onboardingTagline ='You can open additional Margin accounts USDC, ETH, USDT in  and other currencies'
            onboardingAction='New account'
            pic='https://primexbt.com/my/margin-mobile.142711b20ff9c98d.svg'
            >
                <table>
                <tr>
                    <th>Account</th>
                    <th>Equity</th>
                    <th>Open P/L</th>
                    <th>Available margin, % </th>
                    <th>Info</th>
                </tr>
                {accounts.map((accountItem)=>  <tr>
                    <td>
                        <div className="td-currency-label">
                            <img src={accountItem.currencyIcon} alt='icon'></img> &nbsp; &nbsp;<span>{accountItem.currency}</span>
                        </div>
                    </td>
                    <td>
                        <div className="td-currency-unit">{accountItem.balance} {accountItem.unit}</div>
                        <div>≈ 0 USD</div>
                    </td>
                    <td>
                        <div className="td-currency-unit">{accountItem.balance} {accountItem.unit}</div>
                        <div>≈ 0 USD</div>
                    </td>
                    <td>
                        <div className="td-currency-unit">{accountItem.margin}%</div>
                    </td>
                    <td className="td-currency-unit">—</td>
                    <td className="td-currency-actions">
                        <div className="div-currency-actions">
                            <CustomPrimaryButton>Deposite</CustomPrimaryButton>
                            <CustomSecondaryButton>Trade</CustomSecondaryButton>
                        </div>
                    </td>
                </tr>
                )}

                </table>
            </ModuleTemplate>
        </div>
    );
}
export default MarginModule;