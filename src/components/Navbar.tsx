import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isHome = location.pathname === '/';

    const navbarStyle = scrolled || !isHome || isMenuOpen ? {
        background: 'rgba(10, 10, 18, 0.95)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)'
    } : {
        background: 'transparent',
        boxShadow: 'none'
    };

    return (
        <nav className="navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-4" style={navbarStyle}>
            <div className="flex justify-between items-center max-w-7xl mx-auto w-full">
                <div className="logo-container z-50">
                    <Link to="/" onClick={() => setIsMenuOpen(false)}>
                        <img
                            src={logo}
                            alt="SMEC Global Innovators Conclave Logo"
                            className="logo h-12 md:h-16 w-auto hover:rotate-2 transition-transform duration-300"
                            onError={(e: any) => { e.target.style.display = 'none'; }}
                        />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="nav-links hidden md:flex gap-8 items-center">
                    <a href="/" className="nav-link text-white/80 hover:text-gold transition-colors font-medium">Home</a>
                    <a href="/#about" className="nav-link text-white/80 hover:text-gold transition-colors font-medium">About</a>
                    <Link to="/agenda" className={`nav-link font-medium transition-colors ${location.pathname === '/agenda' ? 'text-gold' : 'text-white/80 hover:text-gold'}`}>Agenda</Link>
                    <a href="/#themes" className="nav-link text-white/80 hover:text-gold transition-colors font-medium">Themes</a>
                    <a href="/#contact" className="nav-link px-6 py-2 rounded-full border border-gold text-gold hover:bg-gold hover:text-white transition-all duration-300">Contact Us</a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white z-50 focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                {/* Mobile Overlay */}
                <div className={`fixed inset-0 bg-bg-primary/95 backdrop-blur-xl z-40 transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center justify-center gap-8 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <a href="/" onClick={() => setIsMenuOpen(false)} className="text-2xl font-display font-medium text-white hover:text-gold transition-colors">Home</a>
                    <a href="/#about" onClick={() => setIsMenuOpen(false)} className="text-2xl font-display font-medium text-white hover:text-gold transition-colors">About</a>
                    <Link to="/agenda" onClick={() => setIsMenuOpen(false)} className={`text-2xl font-display font-medium transition-colors ${location.pathname === '/agenda' ? 'text-gold' : 'text-white hover:text-gold'}`}>Agenda</Link>
                    <a href="/#themes" onClick={() => setIsMenuOpen(false)} className="text-2xl font-display font-medium text-white hover:text-gold transition-colors">Themes</a>
                    <a href="/#contact" onClick={() => setIsMenuOpen(false)} className="px-8 py-3 text-xl rounded-full border border-gold text-gold hover:bg-gold hover:text-white transition-all duration-300">Contact Us</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
