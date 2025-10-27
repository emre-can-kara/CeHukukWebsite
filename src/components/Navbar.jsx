/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect, useCallback, useMemo } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

   
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
        { name: "Ana Sayfa", href: "#home" },
        { name: "Kurumsal", href: "#about" },
        { name: "Çalışma Alanlarımız", href: "#practice-areas" },
        { name: "Makaleler", href: "#articles" },
        { name: "Ödeme", href: "#payment" },
        { name: "İletişim", href: "#contact" }
    ], []);

    const toggleMenu = useCallback(() => {
        setIsMenuOpen(prev => !prev);
    }, []);

    const closeMenu = useCallback(() => {
        setIsMenuOpen(false);
    }, []);

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

    return (
        <nav 
            className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${
                isScrolled 
                    ? 'h-14 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg' 
                    : 'h-16 bg-white/5 backdrop-blur-sm'
            }`}
            style={{
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)', // Safari support
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex  items-center justify-between h-full">
                    {/* Logo - Left Side */}
                    <div className="absolute left-5 flex items-center">
                        <div className="flex items-center drop-shadow-lg">
                            <div className="bg-white text-black font-bold text-lg px-2 py-1 rounded mr-3">
                                ÇE
                            </div>
                            <div className="text-white font-bold text-sm leading-tight">
                                ÇAVDAR & ERSÖZ<br />
                            
                            </div>
                        </div>
                    </div>

                    {/* Desktop Menu - Center */}
                    <div className="hidden lg:flex flex-1 justify-center">
                        <ul className="flex gap-8  text-sm text-white">
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <a 
                                        href={item.href}
                                        className="navbar-link hover:scale-110 hover:text-white/80 transition-all duration-200 cursor-pointer block py-2 px-2 drop-shadow-md hover:drop-shadow-lg text-white"
                                        onClick={closeMenu}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info - Right Side (Desktop Only) */}
                    <div className="hidden xl:flex text-white text-xs gap-4 items-center">
                        <a 
                            href="tel:02242522216" 
                            className="navbar-link flex items-center gap-1 hover:text-white/80 transition-colors duration-200 drop-shadow-md hover:drop-shadow-lg text-white"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                            <span>02242522216</span>
                        </a>
                        <a 
                            href="mailto:bilgi@cehukuk.com.tr" 
                            className="navbar-link flex items-center gap-1 hover:text-white/80 transition-colors duration-200 drop-shadow-md hover:drop-shadow-lg text-white"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            <span>bilgi@cehukuk.com.tr</span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white hover:text-white/80 focus:outline-none focus:ring-2 focus:ring-white/50 rounded p-2 drop-shadow-md"
                            aria-label={isMenuOpen ? "Close mobile menu" : "Open mobile menu"}
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-menu"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
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
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                    }}
                    aria-hidden={!isMenuOpen}
                >
                    <div className="px-4 py-6 space-y-4">
                        <nav aria-label="Mobile navigation">
                            <ul className="space-y-1 text-white" role="list">
                                {menuItems.map((item, index) => (
                                    <li key={index} role="listitem">
                                        <a
                                            href={item.href}
                                            className="block px-3 py-3 hover:bg-white/10 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 drop-shadow-md"
                                            onClick={closeMenu}
                                            tabIndex={isMenuOpen ? 0 : -1}
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        
                        {/* Mobile Contact Info */}
                        <div className="pt-4 border-t border-white/20">
                            <div className="text-white text-sm space-y-3">
                                <a 
                                    href="tel:02242522216" 
                                    className="flex items-center gap-2 hover:text-white/80 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 rounded p-1 drop-shadow-md"
                                    aria-label="Telefon: 0224 252 22 16"
                                    tabIndex={isMenuOpen ? 0 : -1}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                    </svg>
                                    <span>02242522216</span>
                                </a>
                                <a 
                                    href="mailto:bilgi@cehukuk.com.tr" 
                                    className="flex items-center gap-2 hover:text-white/80 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 rounded p-1 drop-shadow-md"
                                    aria-label="E-posta: bilgi@cehukuk.com.tr"
                                    tabIndex={isMenuOpen ? 0 : -1}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                    </svg>
                                    <span>bilgi@cehukuk.com.tr</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;