import './sideBar.css'
import {FaBorderAll, FaBitcoin, FaBullhorn, FaUser, FaFile, FaCog, FaAngleLeft, FaAngleRight}  from 'react-icons/fa';
import { useState } from 'react';


function SideBar(){
    const [fold, setFold] = useState(true);
    
    const handleClick = e => {
        e.preventDefault();
        setFold(!fold);
        document.documentElement.style.setProperty('--sidebarwidth', fold? '215px': '100px');
    }


    return(
        <div>
            <nav className='mobile-nav2'>
                <a href='/' className='active'> Dashboard </a>
                <a href='/'> Buy crypto </a>
                <a href='/'> Promo codes </a>
                <a href='/'> Referrels </a>
                <a href='/'> Reports </a>
                <a href='/'> Settings </a>
            </nav>

            <div className='sidebar'>
                <nav className='sidebar-nav'>
                    <div style={{minHeight: 40}}></div>
                    <a href='/' className='active'><FaBorderAll size={24}/> {!fold &&  <label className='sidebar-label'>&nbsp; Dashboard</label> }</a>
                    <a href='/'> <FaBitcoin size={24}/>  {!fold &&  <label className='sidebar-label'>&nbsp; Buy crypto</label> } </a>
                    <a href='/'> <FaBullhorn size={24}/> {!fold &&  <label className='sidebar-label'>&nbsp; Promo codes</label> } </a>
                    <a href='/'> <FaUser size={24}/> {!fold &&   <label className='sidebar-label'>&nbsp; Referrels</label> } </a>
                    <a href='/'> <FaFile size={24}/> {!fold &&   <label className='sidebar-label'>&nbsp; Reports</label> }</a>
                    <a href='/'> <FaCog size={24}/>  {!fold &&  <label className='sidebar-label'>&nbsp; Settings</label> } </a>
                </nav>
                <a href='/' onClick={handleClick}> {fold? <FaAngleRight size={20}/>: <><FaAngleLeft size={20}/> &nbsp;  Hide menu</> }</a>
               
            </div>
        </div>

    );
        
}
export default SideBar;