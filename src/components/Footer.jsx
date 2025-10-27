const Footer = () => {
    const currentYear = new Date().getFullYear();

    const practiceAreas = [
        { name: "Kurumsal Danışmanlık Hizmeti", href: "/practice-area/1" },
        { name: "İş Hukuku", href: "/practice-area/4" },
        { name: "Sigorta Hukuku", href: "/practice-area/7" },
        { name: "Gayrimenkul ve Miras Hukuku", href: "/practice-area/5" },
        { name: "Ceza Hukuku", href: "/practice-area/2" },
        { name: "Aile ve Boşanma Hukuku", href: "/practice-area/3" },
        { name: "İcra ve İflas Hukuku", href: "#" },
        { name: "Arabuluculuk", href: "#" },
        { name: "KVKK Danışmanlığı", href: "#" }
    ];

    const usefulLinks = [
        { name: "Resmi Gazete", href: "https://www.resmigazete.gov.tr/" },
        { name: "Mevzuat Bilgi Sistemi", href: "https://www.mevzuat.gov.tr/" },
        { name: "T.C. Adalet Bakanlığı", href: "https://www.adalet.gov.tr/" },
        { name: "T.C. Anayasa Mahkemesi", href: "https://www.anayasa.gov.tr/" }
    ];

    const socialLinks = [
        {
            name: "LinkedIn",
            href: "#",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
            )
        },
        {
            name: "Facebook",
            href: "#",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
            )
        },
        {
            name: "Twitter",
            href: "#",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.0956Z"/>
                </svg>
            )
        },
        {
            name: "Instagram",
            href: "#",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348 0-1.297 1.051-2.348 2.348-2.348 1.297 0 2.348 1.051 2.348 2.348 0 1.297-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.348-1.051-2.348-2.348 0-1.297 1.051-2.348 2.348-2.348 1.297 0 2.348 1.051 2.348 2.348 0 1.297-1.051 2.348-2.348 2.348z"/>
                </svg>
            )
        },
        {
            name: "YouTube",
            href: "#",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
            )
        }
    ];

    return (
        <footer className="bg-[#0B0C10] text-white py-12 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
                    
                    {/* Column 1 - Logo and Contact Info */}
                    <div className="lg:col-span-1">
                        {/* Logo */}
                        <div className="mb-6">
                            <div className="flex items-center mb-4">
                                <div className="bg-white text-[#0B0C10] font-bold text-2xl px-3 py-2 rounded mr-3">
                                    ÇE
                                </div>
                            </div>
                            <h3 className="text-white font-bold text-lg leading-tight">
                                ÇAVDAR & ERSÖZ<br />
                                AVUKATLIK VE<br />
                                ARABULUCULUK BÜROSU
                            </h3>
                        </div>
                        
                        {/* Contact Info */}
                        <div className="text-sm text-gray-300 space-y-1">
                            <p>Altınova Mahallesi İstanbul Caddesi</p>
                            <p>No:410/A 26 Sky Tower</p>
                            <p>Osmangazi / Bursa</p>
                            <p className="mt-3">Telefon: +90 224 252 22 16</p>
                            <p>E-posta: bilgi@cehukuk.com.tr</p>
                        </div>
                    </div>

                    {/* Column 2 - Çalışma Alanlarımız */}
                    <div>
                        <h4 className="text-white font-semibold text-lg mb-4">
                            Çalışma Alanlarımız
                        </h4>
                        <ul className="space-y-2">
                            {practiceAreas.map((area, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="text-white-400 mr-2 mt-1">○</span>
                                    <a 
                                        href={area.href} 
                                        className="text-gray-300 hover:text-white text-sm transition-colors duration-200 leading-relaxed"
                                    >
                                        {area.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3 - Faydalı Linkler */}
                    <div>
                        <h4 className="text-white font-semibold text-lg mb-4">
                            Faydalı Linkler
                        </h4>
                        <ul className="space-y-2">
                            {usefulLinks.map((link, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="text-white-400 mr-2 mt-1">○</span>
                                    <a 
                                        href={link.href} 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4 - Sosyal Medyada Biz */}
                    <div>
                        <h4 className="text-white font-semibold text-lg mb-4">
                            Sosyal Medyada Biz
                        </h4>
                        <div className="flex space-x-3">
                            {socialLinks.map((social, index) => (
                                <a 
                                    key={index}
                                    href={social.href} 
                                    className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded transition-colors duration-200"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Copyright */}
                <div className="border-t border-gray-800 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-xs text-center md:text-left">
                            ©{currentYear} Çavdar & Ersöz Hukuk ve Danışmanlık Bürosu | Designed By RDDMS. RDDMS bir AYDANMAK markasıdır.
                        </p>
                        <div className="mt-4 md:mt-0">
                            <button 
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="bg-gray-800 hover:bg-gray-700 text-white rounded p-2 transition-colors duration-200"
                                aria-label="Yukarı çık"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;