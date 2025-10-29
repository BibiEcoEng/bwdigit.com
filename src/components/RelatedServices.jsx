import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { FaArrowRight } from 'react-icons/fa';

const RelatedServices = ({
  title = 'services.common.relatedServices.title',
  services = [],
  className = '',
}) => {
  const { t } = useTranslation();

  return (
    <section className={`py-16 ${className}`}>
      <div className='container mx-auto px-4 max-w-7xl'>
        <h2 className='text-3xl font-bold text-gray-900 mb-12'>{t(title)}</h2>

        {/* Services Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.path}
              className='group bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100'
            >
              <h3 className='text-xl font-semibold text-gray-900 mb-3 group-hover:text-accent transition-colors'>
                {t(service.titleKey)}
              </h3>
              <p className='text-gray-600 mb-4 line-clamp-3'>
                {t(service.descriptionKey)}
              </p>
              <div className='flex items-center gap-2 text-accent group-hover:translate-x-1 transition-transform'>
                <span className='font-medium'>{t('common.learnMore')}</span>
                <FaArrowRight className='text-sm' />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

RelatedServices.propTypes = {
  title: PropTypes.string,
  services: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      titleKey: PropTypes.string.isRequired,
      descriptionKey: PropTypes.string.isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
};

export default RelatedServices;
