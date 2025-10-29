import React, { useState, useEffect, useRef } from 'react';
import { Logo } from '../assets';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import ServicesDropdown from './ServicesDropdown';

const Navbar = ({ openSidebar }) => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const languageDropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const getBlogUrl = () => {
    switch (i18n.language) {
      case 'en':
        return 'https://bwdigit.de/blog/en/';
      case 'sr':
        return 'https://bwdigit.de/blog/sr/';
      case 'de':
      default:
        return 'https://bwdigit.de/blog/';
    }
  };

  const navItems = [
    { name: t('nav.home'), href: '#HeroSection', route: '/' },
    { name: t('nav.portfolio'), href: '#Portfolio', route: '/' },
    { name: t('nav.aboutUs'), href: '#AboutSection', route: '/' },
    {
      name: t('nav.blog'),
      action: () => window.open(getBlogUrl(), '_blank'),
    },
    { name: t('nav.faq'), href: '#FAQSection', route: '/' },
    { name: t('nav.contactUs'), href: '#ContactUs', route: '/' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item) => {
    if (item.href && item.route) {
      const targetPath = item.route + item.href;
      if (location.pathname === item.route) {
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate(targetPath);
      }
    } else if (item.action) {
      item.action();
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  // Close language dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        languageDropdownRef.current &&
        !languageDropdownRef.current.contains(event.target)
      ) {
        setIsLanguageDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#1e1b4b]/90 ' : 'bg-transparent'
      }`}
    >
      <div className='max-w-full mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16 sm:h-20'>
          {/* Logo */}

          <Link to='/' className='flex-shrink-0'>
            <img src={Logo} alt='BW Digit' className='h-8 sm:h-10 w-auto' />
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center md:space-x-4 lg:space-x-8'>
            {navItems.map((item, index) => (
              <React.Fragment key={item.name}>
                <button
                  onClick={() => handleNavClick(item)}
                  className='text-white hover:text-accent transition-all duration-300 font-medium border-none shadow-none bg-transparent cursor-pointer text-xs md:text-sm lg:text-base relative after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap'
                >
                  {item.name}
                </button>
                {index === 0 && <ServicesDropdown />}
              </React.Fragment>
            ))}

            {/* CTA Button */}
            <button
              onClick={openSidebar}
              className='ml-2 md:ml-4 px-4 py-2 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors duration-300 text-sm font-medium whitespace-nowrap cursor-pointer'
            >
              {t('nav.cta')}
            </button>

            {/* Language Toggle - Desktop */}
            <div className='relative ml-4' ref={languageDropdownRef}>
              <div className='flex items-center cursor-pointer'>
                <button
                  onClick={() => setIsLanguageDropdownOpen((prev) => !prev)}
                  className='flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors bg-accent text-white'
                >
                  <img
                    src={
                      i18n.language === 'en'
                        ? '/en-flag.svg'
                        : i18n.language === 'de'
                        ? '/de-flag.svg'
                        : '/sr-flag.svg'
                    }
                    alt={i18n.language}
                    className='w-5 h-5 mr-2'
                  />
                  <span className='hidden lg:inline'>
                    {i18n.language === 'en'
                      ? 'English'
                      : i18n.language === 'de'
                      ? 'German'
                      : 'Serbian'}
                  </span>
                  <span className='lg:hidden'>
                    {i18n.language === 'en'
                      ? 'EN'
                      : i18n.language === 'de'
                      ? 'DE'
                      : 'SR'}
                  </span>
                  <svg
                    className='w-4 h-4 ml-1'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M19 9l-7 7-7-7'
                    />
                  </svg>
                </button>
              </div>

              {isLanguageDropdownOpen && (
                <div className='absolute right-0 mt-2 bg-white rounded-md shadow-lg z-50'>
                  <div className='py-1'>
                    <button
                      onClick={() => {
                        i18n.changeLanguage('en');
                        setIsLanguageDropdownOpen(false);
                      }}
                      className='flex items-center w-full px-4 py-2 text-sm text-gray-800 hover:bg-gray-100'
                    >
                      <img
                        src='/en-flag.svg'
                        alt='English'
                        className='w-5 h-5 mr-2'
                      />
                      English
                    </button>
                    <button
                      onClick={() => {
                        i18n.changeLanguage('de');
                        setIsLanguageDropdownOpen(false);
                      }}
                      className='flex items-center w-full px-4 py-2 text-sm text-gray-800 hover:bg-gray-100'
                    >
                      <img
                        src='/de-flag.svg'
                        alt='German'
                        className='w-5 h-5 mr-2'
                      />
                      German
                    </button>
                    <button
                      onClick={() => {
                        i18n.changeLanguage('sr');
                        setIsLanguageDropdownOpen(false);
                      }}
                      className='flex items-center w-full px-4 py-2 text-sm text-gray-800 hover:bg-gray-100'
                    >
                      <img
                        src='/sr-flag.svg'
                        alt='Serbian'
                        className='w-5 h-5 mr-2'
                      />
                      Serbian
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:text-accent transition-colors duration-300 border-none shadow-none bg-transparent'
            aria-label='Toggle menu'
          >
            <FaBars className='w-6 h-6' />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className='fixed inset-0 bg-black/50 md:hidden z-40 backdrop-blur-sm'
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-[250px] sm:w-[300px] bg-[#1e1b4b] transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50 shadow-xl`}
      >
        <div className='flex flex-col h-full'>
          <div className='flex justify-end p-4'>
            <button
              onClick={() => setIsMenuOpen(false)}
              className='text-white hover:text-accent transition-colors duration-300 border-none shadow-none bg-transparent cursor-pointer'
              aria-label='Close menu'
            >
              <FaTimes className='w-6 h-6' />
            </button>
          </div>
          <div className='flex flex-col space-y-6 p-6'>
            {navItems.map((item, index) => (
              <React.Fragment key={item.name}>
                <button
                  onClick={() => handleNavClick(item)}
                  className='text-white hover:text-accent transition-colors duration-300 font-medium text-left border-none shadow-none bg-transparent text-lg cursor-pointer'
                >
                  {item.name}
                </button>
                {index === 0 && (
                  <ServicesDropdown
                    isMobile={true}
                    onItemClick={() => setIsMenuOpen(false)}
                  />
                )}
              </React.Fragment>
            ))}

            <div className='pt-4 border-t border-gray-700'>
              {/* CTA Button - Mobile */}
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  openSidebar();
                }}
                className='block w-full text-center px-4 py-2 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors duration-300 text-sm font-medium cursor-pointer'
              >
                {t('nav.cta')}
              </button>

              {/* Language Toggle - Mobile */}
              <div className='mt-4'>
                <p className='text-gray-400 text-sm mb-2'>Select Language:</p>
                <div className='flex flex-col space-y-2'>
                  <button
                    onClick={() => {
                      i18n.changeLanguage('en');
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors
                      ${
                        i18n.language === 'en'
                          ? 'bg-accent text-white'
                          : 'bg-gray-800 text-gray-200 hover:bg-gray-700'
                      }
                    `}
                  >
                    <img
                      src='/en-flag.svg'
                      alt='English'
                      className='w-5 h-5 mr-2'
                    />
                    English
                  </button>
                  <button
                    onClick={() => {
                      i18n.changeLanguage('de');
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors
                      ${
                        i18n.language === 'de'
                          ? 'bg-accent text-white'
                          : 'bg-gray-800 text-gray-200 hover:bg-gray-700'
                      }
                    `}
                  >
                    <img
                      src='/de-flag.svg'
                      alt='German'
                      className='w-5 h-5 mr-2'
                    />
                    German
                  </button>
                  <button
                    onClick={() => {
                      i18n.changeLanguage('sr');
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors
                      ${
                        i18n.language === 'sr'
                          ? 'bg-accent text-white'
                          : 'bg-gray-800 text-gray-200 hover:bg-gray-700'
                      }
                    `}
                  >
                    <img
                      src='/sr-flag.svg'
                      alt='Serbian'
                      className='w-5 h-5 mr-2'
                    />
                    Serbian
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
