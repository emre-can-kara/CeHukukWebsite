import lawFirmHero from '../assets/lawFirmHero.png';
import lawFirmHero2 from '../assets/lawFirmHero2.webp';
import lawFirmHero3 from '../assets/lawFirmHero3.webp';
import { useEffect, useState } from 'react';

const Hero = () => {
    const heroSlides = [
        {
            image: lawFirmHero,
            title: "Hukuki Sorunlarınıza Çözüm Mü Arıyorsunuz?",
            cta: "Daha Fazlası İçin Tıklayın"
        },
        {
            image: lawFirmHero2,
            title: "Alanımızda En İyisiyiz",
            cta: "Hizmetlerimiz"
        },
        {
            image: lawFirmHero3,
            title: "Profesyonel Çözümler İçin",
            cta: "Bizimle İletişime Geçin"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [heroSlides.length]);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="hero">
            <img 
                key={`hero-img-${currentIndex}`}
                src={heroSlides[currentIndex].image} 
                alt="hero" 
                className="hero-img" 
            />
            
            <div className="bokeh-lights">
                <div className="bokeh-light"></div>
                <div className="bokeh-light"></div>
                <div className="bokeh-light"></div>
                <div className="bokeh-light"></div>
                <div className="bokeh-light"></div>
            </div>
            
            <div className="hero-content">
                <h1 key={`title-${currentIndex}`} className="hero-title">
                    {heroSlides[currentIndex].title}
                </h1>
                <a key={`cta-${currentIndex}`} href="#" className="hero-cta">
                    {heroSlides[currentIndex].cta}
                </a>
            </div>

            <div className="hero-dots">
                {heroSlides.map((_, index) => (
                    <div
                        key={index}
                        className={`hero-dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Hero;
