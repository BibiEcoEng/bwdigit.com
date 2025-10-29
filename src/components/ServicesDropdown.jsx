import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const ServicesDropdown = ({ isMobile = false, onItemClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { t } = useTranslation();

  const services = [
    {
      title: t('nav.servicesDropdown.items.uiUxDesign.title'),
      slug: 'ui-ux-design',
      description: t('nav.servicesDropdown.items.uiUxDesign.description'),
    },
    {
      title: t('nav.servicesDropdown.items.aiAutomation.title'),
      slug: 'ai-automation',
      description: t('nav.servicesDropdown.items.aiAutomation.description'),
    },
    {
      title: t('nav.servicesDropdown.items.ecommerce.title'),
      slug: 'ecommerce-solutions',
      description: t('nav.servicesDropdown.items.ecommerce.description'),
    },
    {
      title: t('nav.servicesDropdown.items.marketingSeo.title'),
      slug: 'marketing-seo',
      description: t('nav.servicesDropdown.items.marketingSeo.description'),
    },
    {
      title: t('nav.servicesDropdown.items.mobileAppDev.title'),
      slug: 'mobile-app-development',
      description: t('nav.servicesDropdown.items.mobileAppDev.description'),
    },
    {
      title: t('nav.servicesDropdown.items.customWebDev.title'),
      slug: 'custom-web-development',
      description: t('nav.servicesDropdown.items.customWebDev.description'),
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleItemClick = () => {
    setIsOpen(false);
    if (onItemClick) onItemClick();
  };

  if (isMobile) {
    return (
      <div className='space-y-2'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='text-white hover:text-accent transition-colors duration-300 font-medium text-left border-none shadow-none bg-transparent text-lg cursor-pointer w-full flex items-center justify-between'
        >
          {t('nav.services')}
          <FaChevronDown
            className={`transform transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
        {isOpen && (
          <div className='pl-4 space-y-3 border-l-2 border-accent/30'>
            {services.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                onClick={handleItemClick}
                className='block text-gray-300 hover:text-accent transition-colors duration-300 text-base'
              >
                {service.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className='relative' ref={dropdownRef}>
      <button
        onMouseEnter={() => setIsOpen(true)}
        onClick={() => setIsOpen(!isOpen)}
        className="text-white hover:text-accent transition-all duration-300 font-medium border-none shadow-none bg-transparent cursor-pointer text-sm lg:text-base relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all after:duration-300 hover:after:w-full flex items-center space-x-1"
      >
        <span>{t('nav.services')}</span>
        <FaChevronDown
          className={`text-xs transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div
          onMouseLeave={() => setIsOpen(false)}
          className='absolute top-full left-0 mt-2 w-[600px] bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50'
        >
          <div className='px-6 py-2 border-b border-gray-100'>
            <h3 className='text-lg font-semibold text-gray-900'>
              {t('nav.servicesDropdown.title')}
            </h3>
            <p className='text-sm text-gray-600'>
              {t('nav.servicesDropdown.subtitle')}
            </p>
          </div>
          <div className='py-2 flex'>
            {/* First Column */}
            <div className='flex-1 px-2'>
              {services
                .slice(0, Math.ceil(services.length / 2))
                .map((service) => (
                  <Link
                    key={service.slug}
                    to={`/services/${service.slug}`}
                    onClick={handleItemClick}
                    className='block px-4 py-3 hover:bg-gray-50 transition-colors duration-200 group rounded-md mx-2'
                  >
                    <div className='flex items-start space-x-3'>
                      <div className='w-2 h-2 bg-accent rounded-full mt-2 group-hover:scale-125 transition-transform'></div>
                      <div>
                        <h4 className='text-gray-900 font-medium group-hover:text-accent transition-colors'>
                          {service.title}
                        </h4>
                        <p className='text-sm text-gray-600 mt-1'>
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>

            {/* Vertical Divider */}
            <div className='w-px bg-gray-200 mx-2'></div>

            {/* Second Column */}
            <div className='flex-1 px-2'>
              {services.slice(Math.ceil(services.length / 2)).map((service) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  onClick={handleItemClick}
                  className='block px-4 py-3 hover:bg-gray-50 transition-colors duration-200 group rounded-md mx-2'
                >
                  <div className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-accent rounded-full mt-2 group-hover:scale-125 transition-transform'></div>
                    <div>
                      <h4 className='text-gray-900 font-medium group-hover:text-accent transition-colors'>
                        {service.title}
                      </h4>
                      <p className='text-sm text-gray-600 mt-1'>
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesDropdown;
