import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationPT from './locales/pt/translation.json';

const resources = {
    en: {
        translation: translationEN
    },
    pt: {
        translation: translationPT
    }
};

i18n
    .use(LanguageDetector)
    .use(reactI18nextModule)
    .init({
        resources,
        lng: "en",

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;