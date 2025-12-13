import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'; // Détecte la langue du navigateur

// Importation des fichiers de traduction
import translationEN from './locales/en/translation_en.json';
import translationFR from './locales/fr/translation_fr.json';
import translationES from './locales/es/translation_es.json';
import translationDE from './locales/de/translation_de.json';
import translationPT from './locales/pt/translation_pt.json';

const resources = {
  en: {
    translation: translationEN
  },
  fr: {
    translation: translationFR
  },
  es: {
    translation: translationES
  },
  de: {
    translation: translationDE
  },
  pt: {
    translation: translationPT
  }
};

i18n
  // Ajout du détecteur de langue
  .use(LanguageDetector)
  // Connexion à React
  .use(initReactI18next)
  .init({
    resources,
    // On retire 'lng: "en"' pour laisser le détecteur faire son travail
    // Le détecteur va regarder : localStorage > navigator (navigateur) > htmlTag
    fallbackLng: 'en', // Si la langue détectée n'est pas dispo, on met l'anglais

    detection: {
      // Ordre de priorité pour la détection
      order: ['localStorage', 'navigator', 'htmlTag'],
      // Où stocker le choix de l'utilisateur pour la prochaine fois
      caches: ['localStorage']
    },

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;