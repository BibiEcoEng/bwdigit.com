import React from "react";
import { useTranslation } from "react-i18next";

const CoreCompetenciesSection = () => {
  const { t } = useTranslation();

  const competencies = [
    {
      id: 1,
      title: t("competency1Title"),
      points: [t("competency1Point1"), t("competency1Point2")],
      bgColor: "bg-[#7DCFB6]",
      textColor: "text-white",
    },
    {
      id: 2,
      title: t("competency2Title"),
      points: [t("competency2Point1"), t("competency2Point2")],
      bgColor: "bg-[#D2B48C]",
      textColor: "text-white",
    },
    {
      id: 3,
      title: t("competency3Title"),
      points: [t("competency3Point1"), t("competency3Point2")],
      bgColor: "bg-[#D2B48C]",
      textColor: "text-white",
    },
    {
      id: 4,
      title: t("competency4Title"),
      points: [t("competency4Point1"), t("competency4Point2")],
      bgColor: "bg-[#7DCFB6]",
      textColor: "text-white",
    },
  ];

  return (
    <section className="section-container py-20" id="CoreCompetenciesSection">
      <div className="text-center mb-16">
        <h2 className="text-[30px] font-bold mb-4 text-[#333333] md:text-[40px] capitalize">
          {t("coreCompetenciesTitle")}
        </h2>
        <div className="w-20 h-1 bg-accent mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {competencies.map((competency) => (
          <div
            key={competency.id}
            className="relative bg-gray-100 rounded-xl shadow-md p-6 border-2 border-accent"
          >
            {/* Top Label */}
            <div className="absolute -top-4 left-4 bg-accent text-white font-semibold rounded-md px-4 py-2 text-sm shadow">
              {competency.id}. {competency.title}
            </div>

            {/* Content */}
            <div
              className="bg-transparent"
              style={{ backdropFilter: "blur(100px)" }}
            >
              <ul className="mt-8 space-y-3 text-gray-800 text-base leading-relaxed list-disc list-inside">
                {competency.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreCompetenciesSection;
