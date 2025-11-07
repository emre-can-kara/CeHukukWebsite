import lawFirmHero from '../assets/lawFirmHero.png';
import lawFirmHero2 from '../assets/lawFirmHero2.webp';
import lawFirmHero3 from '../assets/lawFirmHero3.webp';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
    const heroSlides = [
        {
            image: lawFirmHero,
            preTitle: "Yardıma mı İhtiyacınız Var?",
            title: "Hak İçin Mücadele Ediyoruz",
            subtitle: "25 yılı aşkın tecrübemizle, hukuki haklarınızı korumak için yanınızdayız. Profesyonel çözümler, uzman kadro.",
            cta: "BİZE ULAŞIN"
        },
        {
            image: lawFirmHero2,
            preTitle: "Güvenilir Hukuk Danışmanlığı",
            title: "Deneyim ve Uzmanlık",
            subtitle: "Her adımda, her davada sizinle birlikte ilerliyoruz. Dürüstlük ve başarı odaklı hizmet anlayışı.",
            cta: "BİZE ULAŞIN"
        },
        {
            image: lawFirmHero3,
            preTitle: "Profesyonel Çözümler",
            title: "Adaletin Yanındayız",
            subtitle: "Haklarınızı korumak ve adaleti sağlamak için en iyi hukuki çözümleri sunuyoruz.",
            cta: "BİZE ULAŞIN"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 7000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const handleNext = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
            setIsTransitioning(false);
        }, 500);
    };

    const handlePrev = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + heroSlides.length) % heroSlides.length);
            setIsTransitioning(false);
        }, 500);
    };

    const handleDotClick = (index) => {
        if (index !== currentIndex) {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentIndex(index);
                setIsTransitioning(false);
            }, 500);
        }
    };

    return (
        <div className="hero-justica">
            {/* Background Image */}
            <div className="hero-image-container">
                <img 
                    key={`hero-img-${currentIndex}`}
                    src={heroSlides[currentIndex].image} 
                    alt="Çavdar & Ersöz Hukuk Bürosu" 
                    className={`hero-image ${isTransitioning ? 'hero-image-transitioning' : ''}`}
                />
                <div className="hero-overlay"></div>
            </div>

            {/* Navigation Arrows */}
            <button 
                onClick={handlePrev}
                className="hero-nav-btn hero-nav-prev"
                aria-label="Previous slide"
            >
                <ChevronLeft size={32} />
            </button>
            
            <button 
                onClick={handleNext}
                className="hero-nav-btn hero-nav-next"
                aria-label="Next slide"
            >
                <ChevronRight size={32} />
            </button>

            {/* Content */}
            <div className="hero-content-justica">
                <div className={`hero-text-content ${isTransitioning ? 'hero-fade-out' : 'hero-fade-in'}`}>
                    <div className="hero-pre-title">
                        {heroSlides[currentIndex].preTitle}
                    </div>
                    
                    <h1 className="hero-main-title">
                        {heroSlides[currentIndex].title}
                    </h1>
                    
                    <p className="hero-description">
                        {heroSlides[currentIndex].subtitle}
                    </p>
                    
                    <a 
                        href="#contact" 
                        className="hero-cta-btn"
                    >
                        {heroSlides[currentIndex].cta}
                    </a>
                </div>
            </div>

            {/* Dots Navigation */}
            <div className="hero-dots-container">
                {heroSlides.map((_, index) => (
                    <button
                        key={index}
                        className={`hero-dot ${index === currentIndex ? 'hero-dot-active' : ''}`}
                        onClick={() => handleDotClick(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Hero;
