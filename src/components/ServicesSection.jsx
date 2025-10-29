import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t("contactForm.serviceOptions.webDevelopment"),
      image: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
      description: t("webDesignTitle"),
      slug: "custom-web-development",
      features: [
        t("webDesignFeature1"),
        t("webDesignFeature2"),
        t("webDesignFeature3"),
        t("webDesignFeature4"),
      ],
    },
    {
      title: t("contactForm.serviceOptions.mobileAppDevelopment"),
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968282.png",
      description: t("services.mobileAppFeatures.subtitle"),
      slug: "mobile-app-development",
      features: [
        t("services.mobileAppFeatures.feature1"),
        t("services.mobileAppFeatures.feature2"),
        t("services.mobileAppFeatures.feature3"),
        t("services.mobileAppFeatures.feature4"),
      ],
    },
    {
      title: t("contactForm.serviceOptions.uiUxDesign"),
      image: "https://cdn-icons-png.flaticon.com/512/1157/1157109.png",
      description: t("services.uiUxFeatures.subtitle"),
      slug: "ui-ux-design",
      features: [
        t("services.uiUxFeatures.feature1"),
        t("services.uiUxFeatures.feature2"),
        t("services.uiUxFeatures.feature3"),
        t("services.uiUxFeatures.feature4"),
      ],
    },
    {
      title: t("contactForm.serviceOptions.digitalMarketing"),
      image: "https://cdn-icons-png.flaticon.com/512/1968/1968641.png",
      description: t("seoMarketingTitle"),
      slug: "marketing-seo",
      features: [
        t("seoMarketingFeature1"),
        t("seoMarketingFeature2"),
        t("seoMarketingFeature3"),
        t("seoMarketingFeature4"),
      ],
    },
    {
      title: t("contactForm.serviceOptions.ecommerceSolutions"),
      image: "https://cdn-icons-png.flaticon.com/512/3081/3081559.png",
      description: t("services.ecommerceFeatures.subtitle"),
      slug: "ecommerce-solutions",
      features: [
        t("services.ecommerceFeatures.feature1"),
        t("services.ecommerceFeatures.feature2"),
        t("services.ecommerceFeatures.feature3"),
        t("services.ecommerceFeatures.feature4"),
      ],
    },
    {
      title: t("contactForm.serviceOptions.consulting"),
      image: "https://cdn-icons-png.flaticon.com/512/1570/1570887.png",
      description: t("services.consultingFeatures.subtitle"),
      slug: "ai-automation",
      features: [
        t("services.consultingFeatures.feature1"),
        t("services.consultingFeatures.feature2"),
        t("services.consultingFeatures.feature3"),
        t("services.consultingFeatures.feature4"),
      ],
    },
  ];

  return (
    <section className="section-container py-20" id="ServicesSection">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-section mb-8 text-[#09043C] font-poppins capitalize">
            {t("servicesTitle")}
          </h2>
          <div className="text-base sm:text-lg max-w-4xl mx-auto leading-relaxed text-gray-700 font-raleway">
            {t("servicesSubtitle")}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={`/services/${service.slug}`}
              className="group bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-md border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 flex-shrink-0 bg-gray-50 rounded-lg p-2.5 group-hover:bg-accent/5 transition-colors duration-300">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="heading-card group-hover:text-accent transition-colors duration-300 font-poppins capitalize">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {service.description}
                  </p>
                </div>
              </div>

              <ul className="space-y-2.5 mt-4">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start text-sm text-gray-600"
                  >
                    <span className="mr-2 text-accent mt-1">•</span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
