import ModuleTemplate from "./moduleTemplate";
import {FaRegMoneyBillAlt}  from 'react-icons/fa';


function WalletModule(){
    const wallet=[
        {
            currencyIcon:'https://primexbt.com/my/assets/icons/currency/btc.svg',
            currency:'Bitcoin',
            unit:'BTC',
            balance:0
        },
        {
            currencyIcon:'https://primexbt.com/my/assets/icons/currency/eth.svg',
            currency:' Ethereum ',
            unit:'ETH',
            balance:0
        },
        {
            currencyIcon:'https://primexbt.com/my/assets/icons/currency/usdt.svg',
            currency:'Tether USD',
            unit:'TUSD',
            balance:0
        }
    ]

    return(
        <div style={{gridArea: 'wallet'}}>
            <ModuleTemplate 
            icon={<FaRegMoneyBillAlt size={24}/>} 
            title='Wallet' 
            button={<div></div>}
            >
                <table>
                <tr>
                    <th>Currency</th>
                    <th>Balance</th>
                    <th>Pending</th>
                </tr>
                {wallet.map((currencyItem)=>  <tr>
                    <td>
                        <div className="td-currency-label">
                            <img src={currencyItem.currencyIcon} alt='icon'></img> &nbsp; &nbsp;<span>{currencyItem.currency}</span>
                        </div>
                    </td>
                    <td>
                        <div className="td-currency-unit">{currencyItem.balance} {currencyItem.unit}</div>
                        <div>≈ 0 USD</div>
                    </td>
                    <td>$100</td>
                </tr>
                )}

                </table>
            </ModuleTemplate>
        </div>
    );
}
export default WalletModule;