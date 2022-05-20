import './sideBar.css'

function SideBar(){
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

            </div>
        </div>

    );
        
}
export default SideBar;