import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Tarjimalar
import en from "./locales/en/translation.json";
import uz from "./locales/uz/translation.json";
import ru from "./locales/ru/translation.json";
import jp from "./locales/jp/translation.json";

// Resurslar
const resources = {
  en: { translation: en },
  uz: { translation: uz },
  ru: { translation: ru },
  ja: { translation: jp },
};

// 💾 LocalStorage'dan tilni o‘qish
const savedLanguage = localStorage.getItem("selectedGotosamLanguage") || "en";

// i18n sozlamalari
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage,        // 💾 localStorage'dagi tilni ishlatish
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    debug: false,
  });

export default i18n;
