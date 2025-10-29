import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaArrowRight, FaCheck, FaRocket, FaGift } from 'react-icons/fa';

const SpecialOfferSection = ({ handleOpenContact }) => {
  const { t } = useTranslation();

  return (
    <div className='mb-8 sm:mb-12 md:mb-16 lg:mb-20 relative overflow-hidden'>
      {/* Animated background */}
      <div className='absolute inset-0 bg-gradient-to-r from-accent via-primary to-accent bg-[length:200%_100%] animate-gradient-x opacity-10'></div>

      <div className='relative bg-gradient-to-br from-[#0D0845] via-[#09043C] to-[#0A0340] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 lg:p-16 border border-white/10 shadow-2xl'>
        {/* Decorative elements */}
        <div className='absolute top-0 right-0 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-accent/10 rounded-full blur-3xl'></div>
        <div className='absolute bottom-0 left-0 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-primary/10 rounded-full blur-3xl'></div>
        <div className='absolute top-4 right-4 w-24 h-24 bg-white/5 rounded-full'></div>
        <div className='absolute bottom-4 left-4 w-16 h-16 bg-white/5 rounded-full'></div>

        {/* Main content container */}
        <div className='relative max-w-4xl mx-auto'>
          {/* Animated badge */}
          <div className='flex justify-center mb-6 sm:mb-8'>
            <div className='relative'>
              <span className='absolute inset-0 rounded-full bg-gradient-to-r from-accent to-primary blur-sm animate-pulse'></span>
              <span className='relative block bg-accent/20 text-accent px-4 py-2 rounded-full font-semibold text-sm uppercase tracking-wider border border-accent/30'>
                {t('services.mobile.specialOffer.subtitle')}
              </span>
            </div>
          </div>

          {/* Title with gradient text */}
          <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-6 md:mb-8 leading-tight bg-gradient-to-r from-[#54BD95] via-[#F7DCA1] to-[#D7ABE9] bg-clip-text text-transparent'>
            {t('services.mobile.specialOffer.title')}
          </h2>

          {/* Description with improved styling */}
          <p className='text-gray-200 text-center mb-8 sm:mb-10 md:mb-12 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto'>
            {t('services.mobile.specialOffer.description')}
          </p>

          {/* Card-based layout for included items */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12'>
            {/* What's Included */}
            <div className='bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 transform transition-transform hover:scale-[1.02] hover:shadow-lg'>
              <h4 className='text-white font-semibold mb-4 flex items-center text-lg'>
                <div className='w-8 h-8 mr-3 bg-accent/20 rounded-full flex items-center justify-center'>
                  <FaRocket className='text-accent' />
                </div>
                {t('services.mobile.specialOffer.sections.included.heading')}
              </h4>
              <div className='space-y-4'>
                {t('services.mobile.specialOffer.sections.included.items', {
                  returnObjects: true,
                }).map((item, idx) => (
                  <div key={idx} className='flex items-start gap-3 group'>
                    <div className='w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/40 transition-all duration-300'>
                      <FaCheck className='text-accent text-xs' />
                    </div>
                    <span className='text-white/90 group-hover:text-white transition-colors duration-300 text-sm'>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* What You Get */}
            <div className='bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 transform transition-transform hover:scale-[1.02] hover:shadow-lg'>
              <h4 className='text-white font-semibold mb-4 flex items-center text-lg'>
                <div className='w-8 h-8 mr-3 bg-accent/20 rounded-full flex items-center justify-center'>
                  <FaGift className='text-accent' />
                </div>
                {t('services.mobile.specialOffer.sections.whatYouGet.heading')}
              </h4>
              <div className='space-y-4'>
                {t('services.mobile.specialOffer.sections.whatYouGet.items', {
                  returnObjects: true,
                }).map((item, idx) => (
                  <div key={idx} className='flex items-start gap-3 group'>
                    <div className='w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/40 transition-all duration-300'>
                      <FaCheck className='text-accent text-xs' />
                    </div>
                    <span className='text-white/90 group-hover:text-white transition-colors duration-300 text-sm'>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom line message */}
          <div className='text-center mb-8'>
            <p className='text-white/80 inline-block bg-white/5 px-6 py-3 rounded-full text-sm border border-white/10'>
              {t('services.mobile.specialOffer.cta.bottomLine')}
            </p>
          </div>

          {/* CTA Button */}
          <div className='flex flex-col sm:flex-row items-center justify-center'>
            <button
              onClick={handleOpenContact}
              className='group relative overflow-hidden px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-accent to-primary text-white rounded-lg font-medium text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300'
            >
              {/* Simple glow hover effect - more reliable than skew animation */}
              <span className='absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-colors duration-300'></span>

              {/* Border animation */}
              <span className='absolute bottom-0 left-0 w-0 h-1 bg-white group-hover:w-full transition-all duration-500'></span>

              <span className='relative flex items-center justify-center gap-2'>
                {t('services.mobile.specialOffer.cta.title')}
                <FaArrowRight className='group-hover:translate-x-1 transition-transform duration-300' />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOfferSection;
