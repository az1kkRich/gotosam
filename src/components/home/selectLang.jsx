import React, { useState, useEffect } from "react";
import "../../i18n"; // i18n konfiguratsiyasi
import { useTranslation } from "react-i18next";

// Flag rasmlar
import GbFlag from "../../assets/flags/Gb64.png";
import UzFlag from "../../assets/flags/Uz64.png";
import RuFlag from "../../assets/flags/Ru64.png";
import JpFlag from "../../assets/flags/Jp64.png";

const LanguageSelector = () => {
  const languages = [
    { value: "en", label: "English", flag: GbFlag },
    { value: "uz", label: "Uzbek", flag: UzFlag },
    { value: "ru", label: "Russian", flag: RuFlag },
    { value: "ja", label: "Japanese", flag: JpFlag },
  ];

  const { t, i18n } = useTranslation();

  // localStorage'dan tilni o‘qish, yo‘q bo‘lsa default "en"
  const storedLang = localStorage.getItem("selectedLanguage");
  const initialLang = languages.find((lang) => lang.value === storedLang) || languages[0];

  const [selectedLanguage, setSelectedLanguage] = useState(initialLang);

  // Komponent yuklanganda i18n tilini o‘rnatish
  useEffect(() => {
    i18n.changeLanguage(selectedLanguage.value);
  }, [selectedLanguage, i18n]);

  // Tilni almashtirish
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    const language = languages.find((lang) => lang.value === selectedValue);

    if (language) {
      i18n.changeLanguage(language.value);
      setSelectedLanguage(language);
      localStorage.setItem("selectedLanguage", language.value); // Tilni saqlash
    }
  };

  return (
    <div className="text-white">
      <div className="relative w-[40px] mr-7">
        <select
          id="languageSelector"
          value={selectedLanguage.value}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "5px 28px",
            borderRadius: "5px",
            backgroundColor: "#000",
            color: "white",
            border: "1px solid #555",
            appearance: "none",
            backgroundImage: `url(${selectedLanguage.flag})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 12px center",
            backgroundSize: "34px 34px",
          }}
        >
          {languages.map((lang) => (
            <option key={lang.value} value={lang.value}>
              {lang.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default LanguageSelector;
