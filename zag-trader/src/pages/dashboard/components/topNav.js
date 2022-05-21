import {FaHome, FaChartBar, FaArtstation, FaBitcoin, FaAward, FaBars, FaCreativeCommonsSa}  from 'react-icons/fa';

import './topNav.css'
function TopNav(){
    return(
        <div>
            <div className='mainmenu'>
                <div className='mainmenu-logo'>
                   <a href='/' className='mainmenu-logo-link'>
                    <img  className='mainmenu-logo-img' src='https://primexbt.com/my/assets/images/logo-mobile.svg' alt='logo'></img>
                   </a> 
                   <div className='mainmenu-summery'>
                       <div>
                       BTC/USD
                       </div>
                       <div>29,195.5 <span style={{color: 'red'}}>-3.64% </span> </div>
                   </div>
                  
                </div>
                <div className='mobile-mainmenu-summery'>
                      <p> BTC/USD 29,195.5 <span style={{color: 'red'}}>-3.64% </span></p>
                </div>
                <nav className='mainmenu-nav'>
                    <ul>
                        <li><a className="active" href="/"><FaHome size={24}/> &nbsp; Main</a></li>
                        <li><a href="/"><FaChartBar size={24}/> &nbsp;Margin</a></li>
                        <li><a href="/"><FaBitcoin size={24}/> &nbsp;Buy crypto</a></li>
                        <li><a href="/"><FaArtstation size={24}/> &nbsp;Yield</a></li>
                        <li><a href="/"><FaCreativeCommonsSa size={24}/> &nbsp;Copy-trading</a></li>
                        <li><a href="/"><FaAward size={24}/> &nbsp; Contests</a></li>
                    </ul>
                </nav>
                
               <a href="/" className='more-link'><FaBars size={24}/></a>

            </div>
            <nav className='mobile-nav'>
                    <ul>
                        <li><a className="active" href="/"><div><FaHome size={24}/><div>Main</div></div></a></li>
                        <li><a href="/"><div><FaChartBar size={24}/><div>Margin</div></div></a></li>
                        <li><a href="/"><div><FaBitcoin size={24}/><div> Buy crypto</div></div></a></li>
                        <li><a href="/"><div><FaCreativeCommonsSa size={24}/> <div>Copy-trading</div></div></a></li>
                        <li><a href="/"><div><FaBars size={24}/> <div>More</div></div></a></li>
                    </ul>
            </nav>
            </div> 
    );
}
export default TopNav;