import './bannerSlide.css'
import Banner from './banner';
import { useEffect } from 'react';

function BannerSlide(){
    let slideIndex = 0;

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        console.log(slideIndex)
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    

        slides[slideIndex-1].style.display = "block";  
        setTimeout(showSlides, 3000);
    };

    useEffect(()=>showSlides());
    

    const banners=[
        {
            key: 1,
            header:'Join us!',
            text: 'up to 14% APY' ,
            button: 'start',
            pic: 'https://primexbt.com/my/assets/banners/cov@2x.png'           
        },
        {
            key:2,
            header:'Copy The Best Traders',
            text: '& profit together!',
            button: 'Join',
            pic: 'https://primexbt.com/my/assets/banners/referral@2x.png'
        },
       
    ]

    return(
        <>{
            banners.map((banner)=>
                <div className="banner mySlides fade" key={banner.key}>
                    <Banner header={banner.header} text={banner.text} button={banner.button} pic={banner.pic}/>
                </div>)
        } </>
    );
}
export default BannerSlide;