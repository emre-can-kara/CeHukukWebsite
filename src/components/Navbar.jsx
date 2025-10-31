/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect, useCallback, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";

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
        { name: "Makaleler", href: "#articles" },
        { name: "Ödeme", href: "#payment", hasDropdown: true, dropdownType: "payment" },
        { name: "İletişim", href: "#contact" }
    ], []);

    const kurumsalItems = [
        { name: "Hukuk Büromuz", href: "/hukuk-buromuz", description: "" },
        { name: "Avukatlarımız", href: "/avukatlarimiz", description: "" }
    ];

    const paymentItems = [
        { name: "Online Ödeme", href: "#" },
        { name: "Hesap Numaraları", href: "#" },
        { name: "Ödeme Bildirim Formu", href: "#" }
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

    // Body scroll lock for mobile menu
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

    // Close dropdown when clicking outside
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
        <nav 
            className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${
                isScrolled 
                    ? 'h-16 bg-white shadow-sm' 
                    : 'h-20 bg-white'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full">
                <div className="flex items-center justify-between h-full">
                    {/* Logo - Left Side */}
                    <Link 
                        to="/" 
                        className="flex items-center space-x-3 z-10" 
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <div className="flex items-center">
                            <div className="bg-[#0B0C10] text-white font-extrabold text-2xl px-4 py-2 rounded-md">
                                ÇE
                            </div>
                            <div className="ml-3 text-[#0B0C10] font-bold text-lg leading-tight tracking-wide">
                                ÇAVDAR & ERSÖZ
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Menu - Center */}
                    <div className="hidden lg:flex items-center space-x-2">
                        <ul className="flex items-center space-x-2">
                            {menuItems.map((item, index) => (
                                <li key={index} className="relative">
                                    {item.hasDropdown ? (
                                        <div className="relative group">
                                            <button
                                                onMouseEnter={() => setDropdownOpen(item.dropdownType, true)}
                                                onMouseLeave={() => setDropdownOpen(item.dropdownType, false)}
                                                onClick={(e) => e.stopPropagation()}
                                                className="navbar-link px-4 py-2 text-gray-800 hover:text-gray-900 transition-all duration-200 flex items-center space-x-1"
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
                                            
                                            {/* Dropdown Menu */}
                                            <div 
                                                className={`kurumsal-dropdown absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 rounded-xl transition-all duration-200 ${
                                                    isDropdownOpen(item.dropdownType)
                                                    ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                                                }`}
                                                onMouseEnter={() => setDropdownOpen(item.dropdownType, true)}
                                                onMouseLeave={() => setDropdownOpen(item.dropdownType, false)}
                                            >
                                                <div className="py-2">
                                                    {getDropdownItems(item.dropdownType).map((subItem, subIndex) => (
                                                        <Link
                                                            key={subIndex}
                                                            to={subItem.href}
                                                            className="block px-4 py-3 text-sm transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl"
                                                            onClick={closeMenu}
                                                        >
                                                            {subItem.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        item.href === '/' ? (
                                            <Link
                                                to={item.href}
                                                className="navbar-link px-4 py-2 text-gray-800 hover:text-gray-900 transition-all duration-200 block"
                                                onClick={() => handleNavClick(item.href)}
                                            >
                                                {item.name}
                                            </Link>
                                        ) : (
                                            <a 
                                                href={item.href}
                                                className="navbar-link px-4 py-2 text-gray-800 hover:text-gray-900 transition-all duration-200 block"
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

                    {/* Contact Button - Right Side (Desktop Only) */}
                    <div className="hidden lg:block">
                        <a 
                            href="#contact"
                            className="px-6 py-2.5 bg-[#0B0C10] text-white text-sm font-semibold rounded-full hover:bg-gray-900 transition-all duration-200"
                        >
                            İletişim
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-800 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-lg p-2"
                            aria-label={isMenuOpen ? "Close mobile menu" : "Open mobile menu"}
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-menu"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
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
                    id="mobile-menu"
                    className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-300 ${
                        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}         
                    style={{
                        background: 'white',
                        borderTop: '1px solid rgba(0, 0, 0, 0.08)',
                        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)'
                    }}
                    aria-hidden={!isMenuOpen}
                >
                    <div className="px-6 py-8 space-y-2">
                        <nav aria-label="Mobile navigation">
                            <ul className="space-y-2 text-gray-800" role="list">
                                {menuItems.map((item, index) => (
                                    <li key={index} role="listitem">
                                        {item.hasDropdown ? (
                                            <div>
                                                <button
                                                    onClick={() => {
                                                        if (item.dropdownType === 'kurumsal') {
                                                            toggleKurumsal();
                                                        } else if (item.dropdownType === 'payment') {
                                                            togglePayment();
                                                        }
                                                    }}
                                                    className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-xl transition-colors duration-200 flex items-center justify-between text-sm font-medium"
                                                    tabIndex={isMenuOpen ? 0 : -1}
                                                >
                                                    {item.name}
                                                    <svg 
                                                        className={`h-5 w-5 transition-transform duration-200 ${
                                                            isDropdownOpen(item.dropdownType) ? 'rotate-180' : ''
                                                        }`} 
                                                        fill="none" 
                                                        viewBox="0 0 24 24" 
                                                        stroke="currentColor"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>
                                                
                                                {/* Mobile Dropdown */}
                                                {isDropdownOpen(item.dropdownType) && (
                                                    <div className="mt-2 ml-4 space-y-1">
                                                        {getDropdownItems(item.dropdownType).map((subItem, subIndex) => (
                                                            <Link
                                                                key={subIndex}
                                                                to={subItem.href}
                                                                className="block px-4 py-2.5 text-sm hover:bg-gray-50 rounded-lg transition-colors duration-200"
                                                                onClick={closeMenu}
                                                                tabIndex={isMenuOpen ? 0 : -1}
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
                                                    className="block px-4 py-3 hover:bg-gray-50 rounded-xl transition-colors duration-200 text-sm font-medium"
                                                    onClick={() => handleNavClick(item.href)}
                                                    tabIndex={isMenuOpen ? 0 : -1}
                                                >
                                                    {item.name}
                                                </Link>
                                            ) : (
                                                <a
                                                    href={item.href}
                                                    className="block px-4 py-3 hover:bg-gray-50 rounded-xl transition-colors duration-200 text-sm font-medium"
                                                    onClick={closeMenu}
                                                    tabIndex={isMenuOpen ? 0 : -1}
                                                >
                                                    {item.name}
                                                </a>
                                            )
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        
                        {/* Mobile Contact Button */}
                        <div className="pt-6">
                            <a 
                                href="#contact"
                                className="block w-full text-center px-6 py-3 bg-[#0B0C10] text-white text-sm font-semibold rounded-xl hover:bg-gray-900 transition-all duration-200"
                                onClick={closeMenu}
                            >
                                İletişim
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;