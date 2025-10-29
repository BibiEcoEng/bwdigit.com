import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
// We will remove HttpApi and load resources directly
import enTranslation from './locales/en/translation.json';
import deTranslation from './locales/de/translation.json';
import srTranslation from './locales/sr/translation.json';

i18n
  // .use(HttpApi) // Removed HttpApi
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      de: {
        translation: deTranslation,
      },
      sr: {
        translation: srTranslation,
      },
    },
    supportedLngs: ['en', 'de', 'sr'],
    lng: 'sr', // Set Serbian as the default language
    fallbackLng: 'sr',
    detection: {
      order: [
        'cookie',
        'localStorage',
        'navigator',
        'htmlTag',
        'path',
        'subdomain',
      ],
      caches: ['cookie', 'localStorage'],
    },
    // backend: { // Removed backend configuration
    //   loadPath: '/locales/{{lng}}/translation.json',
    // },
    react: {
      useSuspense: false, // Set to true if you want to use Suspense
    },
  });

export default i18n;
