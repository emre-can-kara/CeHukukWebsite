import lawFirmHero from '../assets/lawFirmHero.png';
import lawFirmHero2 from '../assets/lawFirmHero2.webp';
import lawFirmHero3 from '../assets/lawFirmHero3.webp';
import { useEffect, useState } from 'react';

const Hero = () => {
    const heroSlides = [
        {
            image: lawFirmHero,
            title: "Hukuki Danışmanlığınız İçin",
            subtitle: "Profesyonel çözümler, uzman kadro ile yanınızdayız.",
            cta: "DETAYLI BİLGİ"
        },
        {
            image: lawFirmHero2,
            title: "Güvenilir Hukuki Destek",
            subtitle: "Her adımda, her davada sizinle birlikte ilerliyoruz.",
            cta: "HİZMETLERİMİZ"
        },
        {
            image: lawFirmHero3,
            title: "Deneyim ve Uzmanlık",
            subtitle: "Haklarınızı korumak için en iyi çözümleri sunuyoruz.",
            cta: "İLETİŞİME GEÇİN"
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
            
            <div className="hero-content-modern">
                <h1 
                    key={`title-${currentIndex}`} 
                    className="hero-title-modern"
                >
                    {heroSlides[currentIndex].title}
                </h1>
                <p 
                    key={`subtitle-${currentIndex}`}
                    className="hero-subtitle-modern"
                >
                    {heroSlides[currentIndex].subtitle}
                </p>
                <a 
                    key={`cta-${currentIndex}`} 
                    href="#contact" 
                    className="hero-cta-modern"
                >
                    {heroSlides[currentIndex].cta}
                </a>
            </div>

            <div className="hero-dots-modern">
                {heroSlides.map((_, index) => (
                    <div
                        key={index}
                        className={`hero-dot-modern ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Hero;
