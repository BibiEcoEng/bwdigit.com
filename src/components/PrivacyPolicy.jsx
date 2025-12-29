import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SidebarContact from './sidebarContact/SidebarContact';

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState('generalInformation');
  const [isSidebarContactOpen, setIsSidebarContactOpen] = useState(false);

  const sections = [
    'generalInformation',
    'responsibleEntity',
    'scopeOfApplication',
    'legalBasis',
    'contactForms',
    'whatsapp',
    'analytics',
    'dataRetention',
    'yourRights'
  ];

  const handleSectionNavigation = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  const toggleSidebarContact = () => {
    setIsSidebarContactOpen(!isSidebarContactOpen);
  };

  return (
    <div className='bg-gray-50 min-h-screen'>
      {/* Hero Section */}
      <div className='bg-white border-b border-gray-100'>
        <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20'>
          <div className='text-center'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight'>
              {t('privacyPolicyTitle')}
            </h1>
            <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
              {t('privacyPolicyHeroSubtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16'>
        <div className='lg:grid lg:grid-cols-12 lg:gap-12'>
          {/* Sidebar Navigation - Desktop */}
          <div className='hidden lg:block lg:col-span-3'>
            <div className='sticky top-8'>
              <div className='bg-white rounded-xl p-6 shadow-sm border border-gray-100'>
                <h3 className='text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4'>
                  {t('privacyPolicy.tocTitle')}
                </h3>
                <nav className='space-y-1'>
                  {sections.map((section) => (
                    <button
                      key={section}
                      onClick={() => handleSectionNavigation(section)}
                      className={`block w-full text-left px-4 py-2.5 rounded-lg transition-all duration-200 text-sm ${
                        activeSection === section
                          ? 'bg-blue-50 text-blue-700 font-medium shadow-sm'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      {t(`privacyPolicy.sections.${section}.title`)}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className='lg:col-span-9 mt-8 lg:mt-0'>
            {/* Mobile Navigation */}
            <div className='lg:hidden mb-8'>
              <div className='bg-white rounded-xl p-5 shadow-sm border border-gray-100'>
                <h3 className='text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4'>
                  {t('privacyPolicy.tocTitle')}
                </h3>
                <div className='space-y-1'>
                  {sections.map((section) => (
                    <button
                      key={section}
                      onClick={() => handleSectionNavigation(section)}
                      className={`block w-full text-left px-4 py-2.5 rounded-lg transition-all duration-200 text-sm ${
                        activeSection === section
                          ? 'bg-blue-50 text-blue-700 font-medium'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      {t(`privacyPolicy.sections.${section}.title`)}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Content Sections */}
            <div className='bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden'>
              <div className='p-8 md:p-10 lg:p-12'>
                {sections.map((section, index) => (
                  <section
                    key={section}
                    id={section}
                    className={`scroll-mt-24 ${
                      index < sections.length - 1 ? 'mb-12 pb-12 border-b border-gray-100' : ''
                    }`}
                  >
                    <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-5 tracking-tight'>
                      {t(`privacyPolicy.sections.${section}.title`)}
                    </h2>
                    <div className='prose prose-lg max-w-none'>
                      {t(`privacyPolicy.sections.${section}.content`)
                        .split('\n\n')
                        .map((paragraph, idx) => (
                          <p key={idx} className='text-gray-600 leading-relaxed mb-4 text-base md:text-lg'>
                            {paragraph.split('\n').map((line, lineIdx) => (
                              <React.Fragment key={lineIdx}>
                                {line}
                                {lineIdx < paragraph.split('\n').length - 1 && <br />}
                              </React.Fragment>
                            ))}
                          </p>
                        ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className='bg-white border-t border-gray-100 mt-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight'>
            {t('privacyPolicyCtaTitle')}
          </h2>
          <p className='text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed'>
            {t('privacyPolicyCtaText')}
          </p>
          <button
            onClick={toggleSidebarContact}
            className='inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md'
          >
            {t('privacyPolicyCtaButton')}
          </button>
        </div>
      </div>

      <SidebarContact
        isOpen={isSidebarContactOpen}
        onClose={toggleSidebarContact}
      />
    </div>
  );
};

export default PrivacyPolicy;

