import i18n from "i18next";
import Backend from 'i18next-http-backend'
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const fallbackLanguage = "en";

i18n
  .use(LanguageDetector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: fallbackLanguage,
  });

export default i18n;
