import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SidebarContact from './sidebarContact/SidebarContact';

const TermsAndConditions = () => {
  const { t } = useTranslation();
  const [isSidebarContactOpen, setIsSidebarContactOpen] = useState(false);

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
              {t('termsTitle')}
            </h1>
            <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
              {t('termsHeroSubtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16'>
        <div className='bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden'>
          <div className='p-8 md:p-10 lg:p-12'>
            <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-8 tracking-tight'>
              {t('termsAndConditions.title')}
            </h2>

            <div className='prose prose-lg max-w-none space-y-10'>
              <section>
                <div className='mb-6'>
                  {t('termsAndConditions.sections.intro.content')
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

              <section className='pt-8 border-t border-gray-100'>
                <h3 className='text-xl md:text-2xl font-bold text-gray-900 mb-4 tracking-tight'>
                  {t('termsAndConditions.sections.liability.title')}
                </h3>
                <div>
                  {t('termsAndConditions.sections.liability.content')
                    .split('\n\n')
                    .map((paragraph, idx) => (
                      <p key={idx} className='text-gray-600 leading-relaxed mb-3 text-base md:text-lg'>
                        {paragraph}
                      </p>
                    ))}
                </div>
              </section>

              <section className='pt-8 border-t border-gray-100'>
                <h3 className='text-xl md:text-2xl font-bold text-gray-900 mb-4 tracking-tight'>
                  {t('termsAndConditions.sections.jurisdiction.title')}
                </h3>
                <div>
                  {t('termsAndConditions.sections.jurisdiction.content')
                    .split('\n\n')
                    .map((paragraph, idx) => (
                      <p key={idx} className='text-gray-600 leading-relaxed mb-3 text-base md:text-lg'>
                        {paragraph}
                      </p>
                    ))}
                </div>
              </section>
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

export default TermsAndConditions;
