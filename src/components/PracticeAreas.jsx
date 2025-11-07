import { Scale, Gavel, Building2, Users, FileText, Shield, ArrowRight, Briefcase, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

const PracticeAreas = () => {
    const [visibleCards, setVisibleCards] = useState([]);
    const [hoveredCard, setHoveredCard] = useState(null);
    const sectionRef = useRef(null);

    const practiceAreas = [
        {
            icon: <Users size={40} />,
            title: "Aile & Boşanma Hukuku",
            description: "Aile hukuku ve boşanma davalarında profesyonel hukuki destek ve danışmanlık hizmetleri.",
            shortDesc: "Aile içi uyuşmazlıklar, velayet, nafaka ve mal paylaşımı konularında uzman hukuki destek.",
            link: "/aile-bosanma-hukuku",
            image: "/src/assets/lawFirmHero.png",
            color: "#5C4033"
        },
        {   
            icon: <Briefcase size={40} />,
            title: "İş Hukuku",
            description: "Kıdem tazminatı, işe iade, iş sözleşmeleri ve toplu sözleşme süreçlerinde profesyonel danışmanlık.",
            shortDesc: "İşçi hakları, kıdem tazminatı, işe iade ve arabuluculuk süreçlerinde hukuki destek.",
            link: "/is-hukuku",
            image: "/src/assets/lawFirmHero2.webp",
            color: "#7B5B3E"
        },
        {
            icon: <Home size={40} />,
            title: "Gayrimenkul ve Miras Hukuku",
            description: "Taşınmaz hukuku, miras davaları, tapu işlemleri ve gayrimenkul sözleşmelerinde uzman hukuki hizmet.",
            shortDesc: "Taşınmaz davaları, miras paylaşımı, tapu düzeltme ve ecrimisil davalarında danışmanlık.",
            link: "/gayrimenkul-miras-hukuku",
            image: "/src/assets/lawFirmHero3.webp",
            color: "#8B6F47"
        },
        {
            icon: <Shield size={40} />,
            title: "Sigorta Hukuku",
            description: "Trafik kazaları, iş kazaları ve sigorta tazminat davalarında profesyonel hukuki destek.",
            shortDesc: "Maddi-manevi tazminat, destekten yoksun kalma ve iş kazası davalarında uzman hizmet.",
            link: "/sigorta-hukuku",
            image: "/src/assets/lawFirmHero.png",
            color: "#9B7E51"
        },
        {
            icon: <Gavel size={40} />,
            title: "İcra ve İflas Hukuku",
            description: "Alacak tahsilatı ve borçlu haklarının korunmasında uzman hukuki destek.",
            shortDesc: "Alacak takibi, icra takipleri, haciz işlemleri ve iflas süreçlerinde profesyonel destek.",
            link: "/icra-iflas-hukuku",
            image: "/src/assets/lawFirmHero2.webp",
            color: "#AB8D5A"
        },
        {
            icon: <Scale size={40} />,
            title: "Arabuluculuk",
            description: "Uyuşmazlıkların dostane çözümü için profesyonel arabuluculuk hizmetleri.",
            shortDesc: "Ticari ve kişisel uyuşmazlıkların dava öncesi dostane çözümü için arabuluculuk.",
            link: "/arabuluculuk",
            image: "/src/assets/lawFirmHero3.webp",
            color: "#BB9D63"
        },
        {
            icon: <Shield size={40} />,
            title: "KVKK Danışmanlığı",
            description: "Kişisel verilerin korunması ve KVKK uyum süreçlerinde danışmanlık.",
            shortDesc: "KVKK uyum süreci, veri envanteri oluşturma ve veri güvenliği konularında danışmanlık.",
            link: "/kvkk-danismanligi",
            image: "/src/assets/lawFirmHero.png",
            color: "#CB9D5A"
        },
        {
            icon: <FileText size={40} />,
            title: "Kurumsal Danışmanlık",
            description: "Şirketlerin hukuki süreçlerinde stratejik danışmanlık ve destek hizmetleri.",
            shortDesc: "Şirket kuruluşu, birleşme-devir, sözleşme hazırlama ve kurumsal uyum konularında danışmanlık.",
            link: "/kurumsal-danismanlik",
            image: "/src/assets/lawFirmHero2.webp",
            color: "#D4AF37"
        }
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('🎬 Starting animation sequence...');
            
            for (let i = 0; i < practiceAreas.length; i++) {
                setTimeout(() => {
                    console.log(`✅ Card ${i} becoming visible`);
                    setVisibleCards(prev => [...prev, i]);
                }, i * 150);
            }
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="practice-areas-wrapper">
            <section 
                id="practice-areas" 
                className="practice-areas-section"
                ref={sectionRef}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    {/* Enhanced Header */}
                    <div className="section-header">
                        <p className="text-[#D4AF37] text-sm font-semibold tracking-[3px] uppercase mb-4">
                            UZMANLıK ALANLARıMıZ
                        </p>
                        <h2 className="section-title">Çalışma Alanlarımız</h2>
                        <div className="section-divider"></div>
                        <p className="section-subtitle">
                            Geniş yelpazede profesyonel hukuki danışmanlık ve avukatlık hizmetleri sunuyoruz
                        </p>
                    </div>

                    {/* Professional Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {practiceAreas.map((area, index) => {
                            const isVisible = visibleCards.includes(index);
                            const isHovered = hoveredCard === index;
                            
                            return (
                                <Link
                                    key={index}
                                    to={area.link}
                                    className="practice-card-professional group"
                                    style={{
                                        opacity: isVisible ? 1 : 0,
                                        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                                        transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                                        transitionDelay: `${index * 0.1}s`
                                    }}
                                    onMouseEnter={() => setHoveredCard(index)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                >
                                    {/* Card Image with Overlay */}
                                    <div className="practice-card-image-wrapper">
                                        <img 
                                            src={area.image} 
                                            alt={area.title}
                                            className="practice-card-img"
                                        />
                                        <div 
                                            className="practice-card-color-overlay"
                                            style={{ 
                                                background: `linear-gradient(135deg, ${area.color}dd 0%, ${area.color}99 100%)`
                                            }}
                                        ></div>
                                        
                                        {/* Icon Badge */}
                                        <div className="practice-card-icon-badge">
                                            <div className="text-white">
                                                {area.icon}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="practice-card-body">
                                        <h3 className="practice-card-title">
                                            {area.title}
                                        </h3>
                                        
                                        <p className="practice-card-description">
                                            {isHovered ? area.description : area.shortDesc}
                                        </p>

                                        {/* Call to Action */}
                                        <div className="practice-card-cta">
                                            <span className="practice-card-cta-text">Detaylı Bilgi</span>
                                            <ArrowRight 
                                                size={20} 
                                                className="practice-card-cta-icon"
                                            />
                                        </div>

                                        {/* Decorative Line */}
                                        <div 
                                            className="practice-card-accent-line"
                                            style={{ backgroundColor: area.color }}
                                        ></div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Bottom CTA */}
                    <div className="text-center mt-16">
                        <p className="text-gray-300 mb-6 text-lg">
                            İhtiyacınız olan hukuki desteği bulamadınız mı?
                        </p>
                        <Link 
                            to="/contact" 
                            className="inline-flex items-center gap-3 px-8 py-4 bg-[#D4AF37] text-black font-semibold rounded-sm hover:bg-[#F4D03F] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            <span>Bizimle İletişime Geçin</span>
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PracticeAreas;