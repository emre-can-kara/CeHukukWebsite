/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect, useCallback, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Scale, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isKurumsalOpen, setIsKurumsalOpen] = useState(false);
    const [isPaymentOpen, setIsPaymentOpen] = useState(false);
    const navigate = useNavigate();

   
    const handleScroll = useCallback(() => {
        const scrolled = window.scrollY > 50;
        if (scrolled !== isScrolled) {
            setIsScrolled(scrolled);
        }
    }, [isScrolled]);   

    useEffect(() => {
        let timeoutId = null;
        const throttledScroll = () => {
            if (timeoutId === null) {
                timeoutId = setTimeout(() => {
                    handleScroll();
                    timeoutId = null;
                }, 16); 
            }
        };  

        window.addEventListener('scroll', throttledScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', throttledScroll);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [handleScroll]);

    const menuItems = useMemo(() => [
        { name: "Ana Sayfa", href: "/", hasDropdown: false },
        { name: "Kurumsal", href: "#about", hasDropdown: true, dropdownType: "kurumsal" },
        { name: "Çalışma Alanları", href: "#practice-areas" },
        { name: "Makaleler", href: "#articles" },
        { name: "Ödeme", href: "#payment", hasDropdown: true, dropdownType: "payment" },
        { name: "İletişim", href: "#contact" }
    ], []);

    const kurumsalItems = [
        { name: "Hukuk Büromuz", href: "/hukuk-buromuz", description: "Firmamız Hakkında" },
        { name: "Avukatlarımız", href: "/avukatlarimiz", description: "Uzman Kadromuz" }
    ];

    const paymentItems = [
        { name: "Online Ödeme", href: "#online-payment", description: "Güvenli Ödeme" },
        { name: "Hesap Numaraları", href: "#accounts", description: "Banka Bilgileri" },
        { name: "Ödeme Bildirim Formu", href: "#payment-form", description: "Bildirim" }
    ];

    const toggleMenu = useCallback(() => {
        setIsMenuOpen(prev => !prev);
    }, []);

    const closeMenu = useCallback(() => {
        setIsMenuOpen(false);
        setIsKurumsalOpen(false);
        setIsPaymentOpen(false);
    }, []);

    const toggleKurumsal = useCallback(() => {
        setIsKurumsalOpen(prev => !prev);
        setIsPaymentOpen(false);
    }, []);

    const togglePayment = useCallback(() => {
        setIsPaymentOpen(prev => !prev);
        setIsKurumsalOpen(false);
    }, []);

    const handleNavClick = useCallback((href) => {
        if (href === '/') {
            navigate('/');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        closeMenu();
    }, [navigate, closeMenu]);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        const handleEscape = (e) => {
            if (e.key === 'Escape' && isMenuOpen) {
                closeMenu();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => {
            document.body.style.overflow = 'unset';
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isMenuOpen, closeMenu]);

    useEffect(() => {
        const handleClickOutside = () => {
            setIsKurumsalOpen(false);
            setIsPaymentOpen(false);
        };

        if (isKurumsalOpen || isPaymentOpen) {
            document.addEventListener('click', handleClickOutside);
            return () => document.removeEventListener('click', handleClickOutside);
        }
    }, [isKurumsalOpen, isPaymentOpen]);

    const getDropdownItems = (dropdownType) => {
        switch(dropdownType) {
            case 'kurumsal': return kurumsalItems;
            case 'payment': return paymentItems;
            default: return [];
        }
    };

    const isDropdownOpen = (dropdownType) => {
        switch(dropdownType) {
            case 'kurumsal': return isKurumsalOpen;
            case 'payment': return isPaymentOpen;
            default: return false;
        }
    };

    const setDropdownOpen = (dropdownType, value) => {
        switch(dropdownType) {
            case 'kurumsal': 
                setIsKurumsalOpen(value);
                setIsPaymentOpen(false);
                break;
            case 'payment': 
                setIsPaymentOpen(value);
                setIsKurumsalOpen(false);
                break;
        }
    };

    return (
        <>
            {/* Top Bar with Social Media and Info */}
            <div className="top-bar">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="top-bar-social">
                            <Facebook size={14} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="top-bar-social">
                            <Twitter size={14} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="top-bar-social">
                            <Instagram size={14} />
                        </a>
                    </div>
                    <div className="flex items-center space-x-6 text-xs">
                        <a href="#privacy" className="top-bar-link">Gizlilik Politikası</a>
                        <a href="#request" className="top-bar-link">Talep Formu</a>
                        <a href="#faq" className="top-bar-link">SSS</a>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav 
                className={`main-navbar ${isScrolled ? 'navbar-scrolled' : ''}`}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full">
                    <div className="flex items-center justify-between h-full">
                        {/* Logo */}
                        <Link 
                            to="/" 
                            className="navbar-logo-container" 
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            <div className="navbar-logo-icon">
                                <Scale size={28} className="text-[#C8A882]" />
                            </div>
                            <div className="navbar-logo-text">
                                <span className="navbar-logo-title">ÇAVDAR & ERSÖZ</span>
                                <span className="navbar-logo-subtitle">HUKUK & DANIŞMANLIK</span>
                            </div>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center space-x-1">
                            <ul className="flex items-center space-x-1">
                                {menuItems.map((item, index) => (
                                    <li key={index} className="relative">
                                        {item.hasDropdown ? (
                                            <div className="relative group">
                                                <button
                                                    onMouseEnter={() => setDropdownOpen(item.dropdownType, true)}
                                                    onMouseLeave={() => setDropdownOpen(item.dropdownType, false)}
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="navbar-menu-link"
                                                >
                                                    <span>{item.name}</span>
                                                    <svg 
                                                        className={`h-4 w-4 transition-transform duration-200 ${
                                                            isDropdownOpen(item.dropdownType) ? 'rotate-180' : ''
                                                        }`} 
                                                        fill="none" 
                                                        viewBox="0 0 24 24" 
                                                        stroke="currentColor"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>
                                                
                                                <div 
                                                    className={`navbar-dropdown ${
                                                        isDropdownOpen(item.dropdownType) ? 'navbar-dropdown-open' : ''
                                                    }`}
                                                    onMouseEnter={() => setDropdownOpen(item.dropdownType, true)}
                                                    onMouseLeave={() => setDropdownOpen(item.dropdownType, false)}
                                                >
                                                    {getDropdownItems(item.dropdownType).map((subItem, subIndex) => (
                                                        <Link
                                                            key={subIndex}
                                                            to={subItem.href}
                                                            className="navbar-dropdown-item"
                                                            onClick={closeMenu}
                                                        >
                                                            <div className="font-semibold">{subItem.name}</div>
                                                            {subItem.description && (
                                                                <div className="text-xs text-gray-400 mt-0.5">{subItem.description}</div>
                                                            )}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : (
                                            item.href === '/' ? (
                                                <Link
                                                    to={item.href}
                                                    className="navbar-menu-link"
                                                    onClick={() => handleNavClick(item.href)}
                                                >
                                                    {item.name}
                                                </Link>
                                            ) : (
                                                <a 
                                                    href={item.href}
                                                    className="navbar-menu-link"
                                                    onClick={closeMenu}
                                                >
                                                    {item.name}
                                                </a>
                                            )
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="hidden lg:flex items-center space-x-4">
                            <div className="text-right">
                                <div className="text-xs text-gray-400">Yardıma mı ihtiyacınız var?</div>
                                <a href="tel:+905551234567" className="navbar-phone">
                                    <Phone size={16} />
                                    <span>+90 555 123 45 67</span>
                                </a>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden">
                            <button
                                onClick={toggleMenu}
                                className="mobile-menu-btn"
                                aria-label={isMenuOpen ? "Close mobile menu" : "Open mobile menu"}
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {isMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>

                        {/* Mobile Menu */}
                    <div 
                        className={`mobile-menu ${isMenuOpen ? 'mobile-menu-open' : ''}`}
                    >
                        <div className="px-6 py-8 space-y-2">
                            <ul className="space-y-2">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        {item.hasDropdown ? (
                                            <div>
                                                <button
                                                    onClick={() => {
                                                        if (item.dropdownType === 'kurumsal') toggleKurumsal();
                                                        else if (item.dropdownType === 'payment') togglePayment();
                                                    }}
                                                    className="mobile-menu-item"
                                                >
                                                    {item.name}
                                                    <svg 
                                                        className={`h-5 w-5 transition-transform ${
                                                            isDropdownOpen(item.dropdownType) ? 'rotate-180' : ''
                                                        }`} 
                                                        fill="none" 
                                                        viewBox="0 0 24 24" 
                                                        stroke="currentColor"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>
                                                
                                                {isDropdownOpen(item.dropdownType) && (
                                                    <div className="mt-2 ml-4 space-y-1 border-l-2 border-[#C8A882] pl-4">
                                                        {getDropdownItems(item.dropdownType).map((subItem, subIndex) => (
                                                            <Link
                                                                key={subIndex}
                                                                to={subItem.href}
                                                                className="block px-4 py-2.5 text-sm hover:bg-gray-800 rounded-lg"
                                                                onClick={closeMenu}
                                                            >
                                                                {subItem.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            item.href === '/' ? (
                                                <Link
                                                    to={item.href}
                                                    className="mobile-menu-item"
                                                    onClick={() => handleNavClick(item.href)}
                                                >
                                                    {item.name}
                                                </Link>
                                            ) : (
                                                <a
                                                    href={item.href}
                                                    className="mobile-menu-item"
                                                    onClick={closeMenu}
                                                >
                                                    {item.name}
                                                </a>
                                            )
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;