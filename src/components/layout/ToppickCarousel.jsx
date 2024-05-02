import { 
    useState,
    useEffect,
    Suspense,
} from "react";
import { toppickBannerData } from "./carousel/ToppickBanner";

export default function ToppickCarousel() {

    const[currentIndex, setCurrentIndex] = useState(0);
    const[activeslideBtn, setActiveSlideBtn] = useState(null);
    const[mouseOver, setMouseOver] = useState(false);
    let timer;

    useEffect(() => {
        if(!mouseOver) {
            timer = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % toppickBannerData.length);
            }, 5000);

            return () => clearInterval(timer);
        }
    }, [mouseOver,setCurrentIndex,setActiveSlideBtn]);

    const handleSlideButtonClick = (buttonId) => {
        setActiveSlideBtn(buttonId);
        clearInterval(timer);
    };
    const handleNext = (val) => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % toppickBannerData.length);
        clearInterval(timer);
    };
    const handlePrev = (val) => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + toppickBannerData.length) % toppickBannerData.length);
        clearInterval(timer);
    };

    if(currentIndex > toppickBannerData.length - 1) {
        setCurrentIndex(0);
        clearInterval(timer);
    };

    return(
        <Suspense 
            fallback={<div className="m-auto"><p className="text-7xl">Loading...</p></div>}
        >
            <section id="top-pick-section" className="carousel-section">
                <div id="top-pick-carousel" className="carousel-main-div">
                    <div className="carousel-wrapper">
                        {toppickBannerData.map((banner, index) =>(
                            <div 
                                className={`carousel-item-div ${currentIndex === index ? 'active-carousel' : ''}`} 
                                key={index}
                                onMouseOver={() => setMouseOver(true)}
                                onMouseOut={() => setMouseOver(false)}
                            >
                                <img className={`carousel-item-banner ${currentIndex === index ? 'active-image' : ''}`} src={banner.image} alt={banner.title} key={index} />
                            </div>
                        ))}
                    </div>
                    
                    <div className="carousel-slidertab">
                        {toppickBannerData.map((banner, index) =>(
                            <button 
                                type="button" 
                                className={`carousel-sliderbutton ${currentIndex === index ? 'active': ''}`} 
                                key={index} 
                                aria-label={banner.title}
                                onClick={() => {setCurrentIndex(index); handleSlideButtonClick('')}}
                            >
                            </button>
                        ))}
                    </div>
                    <button 
                        type="button" 
                        id="button-left"
                        className={`carousel-sliderctrlbutton ${activeslideBtn === 'button-left' ? 'active' : ''}`} 
                        onClick={() => {handlePrev(currentIndex - 1); handleSlideButtonClick('button-left');}}
                    >
                        <span className="carousel-sliderctrlbutton-span">
                            <i className="fa-solid fa-chevron-left" />
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button 
                        type="button"
                        id="button-right" 
                        className={`carousel-sliderctrlbutton ${activeslideBtn === 'button-right' ? 'active' : ''}`} 
                        onClick={() => {handleNext(currentIndex + 1); handleSlideButtonClick('button-right');}}
                    >
                        <span className="carousel-sliderctrlbutton-span">
                            <i className="fa-solid fa-chevron-right"/>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>
            </section>
        </Suspense>
    );
};