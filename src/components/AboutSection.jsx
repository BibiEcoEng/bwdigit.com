import React from "react";
import { useTranslation } from "react-i18next";
import { whyChoseUs } from "../assets";

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section
      className="relative py-12 sm:py-16 lg:py-20 bg-white overflow-hidden font-raleway"
      id="AboutSection"
    >
      <div className="relative">
        {/* Main About Content */}
        <div className="text-center mb-12 px-4 sm:px-6 lg:px-8">
          <h2 className="heading-section heading-spacing-medium font-poppins capitalize text-[#09043C]">
            {t("aboutUsTitle")}
          </h2>
          <h3 className="heading-subsection text-gray-800 mb-6 sm:mb-8 max-w-5xl mx-auto leading-relaxed font-poppins capitalize">
            {t("aboutUsSubtitle1")}
          </h3>
          <h4 className="text-lg sm:text-xl text-[#54bd95] font-semibold max-w-4xl mx-auto leading-relaxed mb-6">
            {t("aboutUsSubtitle2")}
          </h4>
          <p className="text-gray-700 text-base sm:text-lg mt-4 sm:mt-6 max-w-4xl mx-auto leading-relaxed font-raleway">
            {t("aboutUsDescription")}
          </p>
        </div>

        {/* Why Choose BW Digit Section */}
        <div className="section-container h-[1px] bg-accent"></div>
        <div className="relative">
          <div className="absolute bg-accent w-40 h-40 rounded-full -top-12 -left-28 lg:-left-28 md:-left-20 sm:-left-16"></div>
          <div className="absolute bg-[#C3A16D] w-20 h-20 rounded-full -top-[-80px] -left-16 lg:-left-16 md:-left-12 sm:-left-8"></div>
        </div>
        <div
          className="section-container grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 mt-12"
          id="WhyChooseUs"
        >
          {/* Main Image */}
          <div className="relative">
            <img
              src={whyChoseUs}
              alt={t("whyChooseImgAlt")}
              className="w-[400px] h-[400px] lg:w-full lg:h-auto object-cover"
            />
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2">
            <h2 className="heading-section mb-6 sm:mb-8 font-poppins capitalize">
              {t("whyChooseUsTitle")}
              <br />
            </h2>

            <div className="space-y-4 sm:space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed">
              {t("whyChooseUsDescription")
                .split("\n\n")
                .map((paragraph, index) => {
                  if (paragraph.includes(":")) {
                    const [beforeColon, ...rest] = paragraph.split(":");
                    return (
                      <p key={index}>
                        <strong>{beforeColon.trim()}:</strong>{" "}
                        {rest.join(":").trim()}
                      </p>
                    );
                  } else {
                    return <p key={index}>{paragraph}</p>;
                  }
                })}
            </div>

            {/* Optional CTA Button */}
            <div className="mt-8 sm:mt-10">
              <button
                onClick={() =>
                  document
                    .getElementById("ServicesSection")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 hover:scale-105 transform transition-all duration-300 cursor-pointer font-poppins"
              >
                {t("discoverServicesButton")}
              </button>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute bg-accent w-40 h-40 rounded-full lg:-bottom-[-100px] -bottom-8 -right-28 lg:-right-28 md:-right-20 sm:-right-16"></div>
          <div className="absolute bg-[#C3A16D] w-20 h-20 rounded-full lg:-bottom-[-50px] -bottom-[50px] -right-16 lg:-right-16 md:-right-12 sm:-right-8"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
