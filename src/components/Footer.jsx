import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            {/* Main Footer Section */}
            <footer className="footer-section">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">
                        
                        {/* Column 1: Logo & About */}
                        <div className="footer-logo-container">
                            <h3 className="footer-logo">ÇAVDAR & ERSÖZ</h3>
                            <div className="footer-logo-line"></div>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                Profesyonel hukuk hizmetlerinde güvenilir ortağınız. Adalete bağlı, size adanmış.
                            </p>
                            
                            {/* Social Media Links */}
                            <div className="flex gap-3">
                                <a 
                                    href="https://facebook.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="footer-social-link"
                                    aria-label="Facebook"
                                >
                                    <Facebook size={18} />
                                </a>
                                <a 
                                    href="https://twitter.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="footer-social-link"
                                    aria-label="Twitter"
                                >
                                    <Twitter size={18} />
                                </a>
                                <a 
                                    href="https://instagram.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="footer-social-link"
                                    aria-label="Instagram"
                                >
                                    <Instagram size={18} />
                                </a>
                                <a 
                                    href="https://linkedin.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="footer-social-link"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin size={18} />
                                </a>
                            </div>
                        </div>

                        {/* Column 2: Hızlı Bağlantılar */}
                        <div>
                            <h4 className="footer-section-title">Hızlı Bağlantılar</h4>
                            <ul className="space-y-3 mt-6">
                                <li>
                                    <Link to="/" className="footer-link">
                                        Ana Sayfa
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/hukuk-buromuz" className="footer-link">
                                        Hukuk Büromuz
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/avukatlarimiz" className="footer-link">
                                        Avukatlarımız
                                    </Link>
                                </li>
                                <li>
                                    <a href="#practice-areas" className="footer-link">
                                        Çalışma Alanları
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact" className="footer-link">
                                        İletişim
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Column 3: Çalışma Alanları */}
                        <div>
                            <h4 className="footer-section-title">Çalışma Alanları</h4>
                            <ul className="space-y-3 mt-6">
                                <li>
                                    <Link to="/aile-bosanma-hukuku" className="footer-link">
                                        Aile & Boşanma Hukuku
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/is-hukuku" className="footer-link">
                                        İş Hukuku
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/icra-iflas-hukuku" className="footer-link">
                                        İcra ve İflas Hukuku
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/arabuluculuk" className="footer-link">
                                        Arabuluculuk
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/kvkk-danismanligi" className="footer-link">
                                        KVKK Danışmanlığı
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/kurumsal-danismanlik" className="footer-link">
                                        Kurumsal Danışmanlık
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 4: İletişim */}
                        <div>
                            <h4 className="footer-section-title">İletişim Bilgileri</h4>
                            <ul className="space-y-4 mt-6">
                                <li className="flex items-start gap-3 footer-contact-item">
                                    <MapPin size={20} className="text-[#D4AF37] mt-1 flex-shrink-0" />
                                    <span className="text-sm">
                                        Atatürk Bulvarı No:123<br />
                                        Çankaya, Ankara 06100
                                    </span>
                                </li>
                                <li className="flex items-center gap-3 footer-contact-item">
                                    <Phone size={20} className="text-[#D4AF37] flex-shrink-0" />
                                    <a href="tel:+905551234567" className="text-sm hover:text-[#D4AF37] transition-colors">
                                        +90 555 123 45 67
                                    </a>
                                </li>
                                <li className="flex items-center gap-3 footer-contact-item">
                                    <Mail size={20} className="text-[#D4AF37] flex-shrink-0" />
                                    <a href="mailto:info@cavdarersoz.com" className="text-sm hover:text-[#D4AF37] transition-colors">
                                        info@cavdarersoz.com
                                    </a>
                                </li>
                                <li className="flex items-start gap-3 footer-contact-item">
                                    <Clock size={20} className="text-[#D4AF37] mt-1 flex-shrink-0" />
                                    <span className="text-sm">
                                        Pzt - Cuma: 09:00 - 18:00<br />
                                        Cumartesi: 10:00 - 14:00
                                    </span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Copyright Bar */}
                <div className="footer-copyright-bar">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <p>
                                © 2024 Çavdar & Ersöz Hukuk Bürosu. Tüm hakları saklıdır.
                            </p>
                            <div className="flex gap-6 text-sm">
                                <Link to="/privacy-policy" className="hover:text-[#D4AF37] transition-colors">
                                    Gizlilik Politikası
                                </Link>
                                <span className="text-gray-600">|</span>
                                <Link to="/terms" className="hover:text-[#D4AF37] transition-colors">
                                    Kullanım Şartları
                                </Link>
                                <span className="text-gray-600">|</span>
                                <Link to="/kvkk" className="hover:text-[#D4AF37] transition-colors">
                                    KVKK
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;