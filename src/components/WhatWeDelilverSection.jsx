import { useTranslation } from 'react-i18next';
import {
  WhatWeDeliver,
  seo,
  technicalPerfection,
  customSolutions,
} from '../assets';

const WhatWeDelilverSection = () => {
  const { t } = useTranslation();

  return (
    <section className='py-12 sm:py-16 lg:py-20 bg-gray-50 font-raleway'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* Left Content */}
          <div className='lg:pr-8'>
            <h2 className='heading-section heading-spacing-medium font-poppins mb-6'>
              {t('whatWeDeliver.title')}
            </h2>
            <p className='text-gray-600 text-lg mb-8 leading-relaxed'>
              {t('whatWeDeliver.subtitle')}
            </p>

            {/* Cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {/* Custom Solutions */}
              <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-100'>
                <div className='flex items-center space-x-3 mb-4'>
                  <div className='flex-shrink-0'>
                    <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center p-2'>
                      <img
                        src={customSolutions}
                        alt='Custom Solutions'
                        className='w-full h-full object-contain'
                      />
                    </div>
                  </div>
                  <h3 className='text-lg font-semibold text-gray-800 font-poppins'>
                    {t('whatWeDeliver.cards.customSolutions.title')}
                  </h3>
                </div>
                <p className='text-gray-600 leading-relaxed text-sm'>
                  {t('whatWeDeliver.cards.customSolutions.description')}
                </p>
              </div>

              {/* SEO Excellence */}
              <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-100'>
                <div className='flex items-center space-x-3 mb-4'>
                  <div className='flex-shrink-0'>
                    <div className='w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center p-2'>
                      <img
                        src={seo}
                        alt='SEO Excellence'
                        className='w-full h-full object-contain'
                      />
                    </div>
                  </div>
                  <h3 className='text-lg font-semibold text-gray-800 font-poppins'>
                    {t('whatWeDeliver.cards.seoExcellence.title')}
                  </h3>
                </div>
                <p className='text-gray-600 leading-relaxed text-sm'>
                  {t('whatWeDeliver.cards.seoExcellence.description')}
                </p>
              </div>

              {/* Technical Perfection - Full width */}
              <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-100 md:col-span-2'>
                <div className='flex items-center space-x-3 mb-4'>
                  <div className='flex-shrink-0'>
                    <div className='w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center p-2'>
                      <img
                        src={technicalPerfection}
                        alt='Technical Perfection'
                        className='w-full h-full object-contain'
                      />
                    </div>
                  </div>
                  <h3 className='text-lg font-semibold text-gray-800 font-poppins'>
                    {t('whatWeDeliver.cards.technicalPerfection.title')}
                  </h3>
                </div>
                <p className='text-gray-600 leading-relaxed text-sm'>
                  {t('whatWeDeliver.cards.technicalPerfection.description')}
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className='relative'>
            <div className='relative z-10'>
              <img
                src={WhatWeDeliver}
                alt={t('whatWeDeliver.imageAlt')}
                className='w-full h-auto rounded-2xl shadow-sm'
              />
            </div>
            {/* Background decoration */}
            <div className='absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl transform rotate-3 scale-105 opacity-20 -z-10'></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDelilverSection;
