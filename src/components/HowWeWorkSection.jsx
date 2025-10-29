import React from 'react';
import { useTranslation } from 'react-i18next';

const HowWeWorkSection = () => {
  const { t } = useTranslation();

  const workflowSteps = [
    {
      step: '01',
      title: t('howWeWork.step1.title'),
      description: t('howWeWork.step1.description'),
      deliverables: [
        t('howWeWork.step1.deliverable1'),
        t('howWeWork.step1.deliverable2'),
        t('howWeWork.step1.deliverable3'),
        t('howWeWork.step1.deliverable4'),
      ],
    },
    {
      step: '02',
      title: t('howWeWork.step2.title'),
      description: t('howWeWork.step2.description'),
      deliverables: [
        t('howWeWork.step2.deliverable1'),
        t('howWeWork.step2.deliverable2'),
        t('howWeWork.step2.deliverable3'),
        t('howWeWork.step2.deliverable4'),
      ],
    },
    {
      step: '03',
      title: t('howWeWork.step4.title'),
      description: t('howWeWork.step4.description'),
      deliverables: [
        t('howWeWork.step4.deliverable1'),
        t('howWeWork.step4.deliverable2'),
        t('howWeWork.step4.deliverable3'),
        t('howWeWork.step4.deliverable4'),
      ],
    },
  ];

  return (
    <section className='py-16 bg-white' id='HowWeWorkSection'>
      <div className='container mx-auto px-4 max-w-6xl'>
        <div className='text-center mb-16'>
          <h2 className='text-[32px] font-bold mb-3 capitalize'>
            {t('howWeWorkTitle')}
          </h2>
          <p className='text-gray-600 text-lg max-w-3xl mx-auto'>
            {t('howWeWorkSubtitle')}
          </p>
        </div>

        <div className='relative'>
          {/* Steps Container */}
          <div className='flex flex-col md:flex-row justify-between items-start gap-24 relative'>
            {/* Dashed Lines Connector */}
            <div className='hidden md:block absolute top-6 left-[15%] right-[15%] z-0'>
              <div className='flex justify-between w-full'>
                {/* First connector line */}
                <div className='w-[45%] relative'>
                  <div className='absolute w-2.5 h-2.5 bg-[#4a9d78] rounded-full left-4 top-1/2 -translate-y-1/2'></div>
                  <div
                    className='left-4 w-full border-t-[3px] border-[#4a9d78] opacity-30'
                    style={{
                      borderStyle: 'dashed',
                      borderSpacing: '20px',
                      backgroundImage:
                        'repeating-linear-gradient(to right, #4a9d78 0, #4a9d78 10px, transparent 10px, transparent 20px)',
                    }}
                  ></div>
                  <div className='absolute w-2.5 h-2.5 bg-[#4a9d78] rounded-full -right-1 top-1/2 -translate-y-1/2'></div>
                </div>
                {/* Second connector line */}
                <div className='w-[45%] relative'>
                  <div className='absolute w-2.5 h-2.5 bg-[#4a9d78] rounded-full -left-1 top-1/2 -translate-y-1/2'></div>
                  <div
                    className='w-full border-t-[3px] border-[#4a9d78] opacity-30'
                    style={{
                      borderStyle: 'dashed',
                      borderSpacing: '20px',
                      backgroundImage:
                        'repeating-linear-gradient(to right, #4a9d78 0, #4a9d78 10px, transparent 10px, transparent 20px)',
                    }}
                  ></div>
                  <div className='absolute w-2.5 h-2.5 bg-[#4a9d78] rounded-full right-4 top-1/2 -translate-y-1/2'></div>
                </div>
              </div>
            </div>

            {/* Steps */}
            {workflowSteps.map((step, index) => (
              <div key={index} className='flex-1 relative z-10'>
                {/* Step Number */}
                <div className='w-14 h-14 rounded-2xl bg-[#4a9d78] flex items-center justify-center text-white text-xl font-bold mb-6 mx-auto'>
                  {step.step}
                </div>

                {/* Content */}
                <div className='text-left'>
                  <h3 className='text-xl font-bold mb-3'>{step.title}</h3>
                  <p className='text-sm text-gray-600 mb-6 leading-relaxed'>
                    {step.description}
                  </p>

                  {/* Key Deliverables */}
                  <div>
                    <h4 className='font-bold text-base mb-4'>
                      {t('keyDeliverables')}
                    </h4>
                    <div className='bg-[#4a9d78]/5 rounded-lg p-4'>
                      <ul className='grid grid-cols-2 gap-x-4 gap-y-3'>
                        {step.deliverables.map((deliverable, i) => (
                          <li
                            key={i}
                            className='flex items-center text-sm text-gray-600'
                          >
                            <div className='w-1.5 h-1.5 bg-[#4a9d78] rounded-full mr-2 flex-shrink-0'></div>
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
