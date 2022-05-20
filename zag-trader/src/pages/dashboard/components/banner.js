import './banner.css'
import {Link } from "react-router-dom";

function Banner(){
    return(
        <div className='banner'>
        <div className='bannerCard'>
            <div className='bannerCard-content'>
               <div className='bannerCard-text'>
               <label className='bannerCard-header'>Copy The Best Traders</label>
               <div>&amp; profit together!</div> 
               </div>
                <Link to="/dashboard" className="linkButton">Join</Link>
            </div>

        </div>
       </div>
        
    );
}

export default Banner;