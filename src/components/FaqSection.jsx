import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SideContact from './sidebarContact/SidebarContact';

const FaqSection = () => {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const faqData = [
    {
      id: 1,
      question: t('faqQ1'),
      answer: t('faqA1'),
    },
    {
      id: 2,
      question: t('faqQ2'),
      answer: t('faqA2'),
    },
    {
      id: 3,
      question: t('faqQ3'),
      answer: t('faqA3'),
    },
    {
      id: 4,
      question: t('faqQ4'),
      answer: t('faqA4'),
    },
    {
      id: 5,
      question: t('faqQ5'),
      answer: t('faqA5'),
    },
  ];

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const handleScheduleCallClick = () => {
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
  };

  return (
    <section className='py-12 md:py-16 lg:py-24 bg-white' id='FAQSection'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12 md:mb-16 lg:mb-20'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6'>
            {t('faqTitle')}
          </h2>
          <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto'>
            {t('faqSubtitle')}
          </p>
        </div>

        <div className='max-w-4xl mx-auto'>
          <div className='space-y-3 md:space-y-4'>
            {faqData.map((faq) => (
              <div
                key={faq.id}
                className='bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300'
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className='w-full px-5 md:px-7 py-5 md:py-6 text-left flex items-center justify-between focus:outline-none group'
                >
                  <span className='font-semibold text-base md:text-lg text-gray-900 pr-4 group-hover:text-accent transition-colors duration-300'>
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openFaq === faq.id
                        ? 'bg-accent rotate-45'
                        : 'bg-accent/10 group-hover:bg-accent/20'
                    }`}
                  >
                    <svg
                      className={`w-4 h-4 transition-colors duration-300 ${
                        openFaq === faq.id ? 'text-white' : 'text-accent'
                      }`}
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                      />
                    </svg>
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === faq.id
                      ? 'max-h-[500px] opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className='px-5 md:px-7 pb-6'>
                    <div className='w-full h-px bg-gray-100 mb-4'></div>
                    <p className='text-gray-600 text-base md:text-lg leading-relaxed'>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className='mt-16 lg:mt-20'>
          <div className='relative bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16'>
            <div className='absolute inset-0 bg-white/40 backdrop-blur-sm rounded-3xl'></div>
            <div className='relative max-w-3xl mx-auto'>
              <div className='w-16 h-16 md:w-20 md:h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8'>
                <svg
                  className='w-8 h-8 md:w-10 md:h-10 text-accent'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </div>

              <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4 md:mb-6'>
                {t('faq.stillHaveQuestionsTitle')}
              </h3>
              <p className='text-lg md:text-xl text-gray-600 text-center mb-8 md:mb-10 leading-relaxed'>
                {t('faq.stillHaveQuestionsText')}
              </p>

              <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                <button
                  onClick={() =>
                    document
                      .getElementById('ContactUs')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className='w-full sm:w-auto btn-primary text-lg px-8 py-4 hover:scale-[1.02] transform transition-all duration-300'
                >
                  {t('faq.contactUsButton')}
                </button>
                <button
                  onClick={handleScheduleCallClick}
                  className='w-full sm:w-auto btn-outline text-lg px-8 py-4 hover:scale-[1.02] transform transition-all duration-300'
                >
                  {t('faq.scheduleCallButton')}
                </button>
              </div>

              <div className='mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-500'>
                <div className='flex items-start justify-center space-x-3 bg-white/50 rounded-xl p-4 backdrop-blur-sm'>
                  <svg
                    className='w-6 h-6 text-accent'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                  <span className='text-base md:text-lg font-medium'>
                    {t('faq.quickResponse')}
                  </span>
                </div>
                <div className='flex items-start justify-center space-x-3 bg-white/50 rounded-xl p-4 backdrop-blur-sm'>
                  <svg
                    className='w-6 h-6 text-accent'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                  <span className='text-base md:text-lg font-medium'>
                    {t('faq.freeConsultation')}
                  </span>
                </div>
                <div className='flex items-start justify-center space-x-3 bg-white/50 rounded-xl p-4 backdrop-blur-sm sm:col-span-2 lg:col-span-1'>
                  <svg
                    className='w-6 h-6 text-accent'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z'
                    />
                  </svg>
                  <span className='text-base md:text-lg font-medium'>
                    {t('faq.expertSupport')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SideContact isOpen={isContactOpen} onClose={handleCloseContact} />
    </section>
  );
};

export default FaqSection;
