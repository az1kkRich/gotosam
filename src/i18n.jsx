import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// json
import en  from "./locales/en/translation.json";
import uz  from "./locales/uz/translation.json";
import ru  from "./locales/ru/translation.json";
import jp  from "./locales/jp/translation.json";

const resource = {
    en: {
        translation: en,
    },
    uz: {
        translation: uz,
    },
    ru: {
        translation: ru,
    },
    jp: {
        translation: jp,
    },
}

// Main i18n configuration
i18n
.use(initReactI18next)
.init({
    resources: resource,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
    debug: true,
})