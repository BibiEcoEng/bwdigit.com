import React from 'react';
import { useTranslation } from 'react-i18next';

import image from '../assets/images/2.png';
import image1 from '../assets/images/1.png';

const MissionVisionSection = () => {
  const { t } = useTranslation();

  return (
    <section className='bg-white overflow-hidden' id='MissionVisionSection'>
      <div className='section-container'>
        {/* Mission Section */}
        <div className='flex flex-col md:flex-row items-center gap-8 lg:gap-12 mb-2'>
          <div className='w-full md:w-1/2 lg:w-2/5 xl:w-1/3 transform transition-transform duration-500 hover:scale-[1.02] relative order-2 md:order-1'>
            <img
              src={image1}
              alt={t('missionImgAlt')}
              className='w-full h-auto rounded-lg object-cover max-w-md mx-auto'
              loading='lazy'
            />
          </div>
          <div className='w-full md:w-1/2 lg:w-3/5 xl:w-2/3 order-1 md:order-2'>
            <h3 className='flex flex-col text-[#54BD95] text-4xl lg:text-5xl font-medium mb-6'>
              <span>{t('missionTitle').split(' ')[0]}</span>
              <span>{t('missionTitle').split(' ')[1]}</span>
            </h3>
            <p className='text-lg md:text-xl leading-relaxed text-gray-700 max-w-2xl'>
              {t('missionText')}
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className='flex flex-col md:flex-row items-center gap-8 lg:gap-12'>
          <div className='w-full md:w-1/2 lg:w-3/5 xl:w-2/3 order-1'>
            <h3 className='flex flex-col text-[#C99C33] text-4xl lg:text-5xl font-medium mb-6'>
              <span>{t('visionTitle').split(' ')[0]}</span>
              <span>{t('visionTitle').split(' ')[1]}</span>
            </h3>
            <p className='text-lg md:text-xl leading-relaxed text-gray-700 max-w-3xl'>
              {t('visionText')}
            </p>
          </div>
          <div className='w-full md:w-1/2 lg:w-2/5 xl:w-1/3 transform transition-transform duration-500 hover:scale-[1.02] relative order-2'>
            <img
              src={image}
              alt={t('missionImgAlt')}
              className='w-full h-auto rounded-lg object-cover max-w-md mx-auto'
              loading='lazy'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
