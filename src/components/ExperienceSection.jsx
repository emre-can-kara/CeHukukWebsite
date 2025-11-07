import { useState } from 'react';

const ExperienceSection = () => {
    const [activeTab, setActiveTab] = useState('attorneys');

    const tabs = [
        { id: 'attorneys', label: 'Avukatlarımız' },
        { id: 'expertise', label: 'Uzmanlık Alanlarımız' },
        { id: 'firm', label: 'Hukuk Büromuz' }
    ];

    const content = {
        attorneys: {
            title: 'Let Our Experience be Your Guide',
            subtitle: 'EXPERIENCES',
            description: 'Avukatlarımız, hukuki hizmetlerde mükemmellik sağlama taahhüdümüzün temel taşıdır. Ekibimizin her bir üyesi, deneyim, uzman bilgi ve müvekkilleri için en iyi sonuçları elde etme konusunda derin bir bağlılık getirir. Ortak yaklaşımımızda gurur duyuyoruz ve her davanın çeşitli hukuk ekibimizin kolektif uzmanlığından faydalanmasını sağlıyoruz.'
        },
        expertise: {
            title: 'Geniş Uzmanlık Alanları',
            subtitle: 'EXPERTISE',
            description: 'Çok çeşitli hukuk alanlarında derin uzmanlığımızla, müvekkillerimize kapsamlı hukuki çözümler sunuyoruz. İş hukukundan aile hukukuna, ticaret hukukundan ceza hukukuna kadar geniş bir yelpazede profesyonel destek sağlıyoruz.'
        },
        firm: {
            title: 'Güvenilir Hukuk Ortağınız',
            subtitle: 'OUR FIRM',
            description: 'Yılların verdiği tecrübe ve modern hukuk anlayışını birleştirerek, müvekkillerimize en yüksek kalitede hukuki hizmet sunuyoruz. Dürüstlük, şeffaflık ve müşteri memnuniyeti odaklı çalışma prensibimizle sizin güvenilir hukuk ortağınızız.'
        }
    };

    return (
        <section className="experience-section">
            <div className="experience-container">
                {/* Left Side - Image */}
                <div className="experience-image-side">
                    <div className="experience-image-wrapper">
                        <img 
                            src="/src/assets/lawFirmHero2.webp" 
                            alt="Legal Professional"
                            className="experience-main-image"
                        />
                        <div className="experience-image-overlay"></div>
                    </div>
                </div>

                {/* Right Side - Content */}
                <div className="experience-content-side">
                    <div className="experience-content-wrapper">
                        <p className="experience-subtitle">{content[activeTab].subtitle}</p>
                        <h2 className="experience-title">{content[activeTab].title}</h2>
                        
                        {/* Tabs */}
                        <div className="experience-tabs">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`experience-tab ${activeTab === tab.id ? 'experience-tab-active' : ''}`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Content */}
                        <div className="experience-description">
                            <p>{content[activeTab].description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;