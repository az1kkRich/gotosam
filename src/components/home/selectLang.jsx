import React, { useState } from "react";
import "../../i18n"; // Import your i18n configuration
import { useTranslation } from "react-i18next";

// Images
import GbFlag from "../../assets/flags/Gb64.png"; // Adjust the path to your flag image
import UzFlag from "../../assets/flags/Uz64.png"; // Adjust the path to your flag image
import RuFlag from "../../assets/flags/Ru64.png"; // Adjust the path to your flag image
import JpFlag from "../../assets/flags/Jp64.png"; // Adjust the path to your flag image

const LanguageSelector = () => {

  const languages = [
    { value: "en", label: "English", flag: GbFlag },
    { value: "uz", label: "Uzbek", flag: UzFlag },
    { value: "ru", label: "Russian", flag: RuFlag },
    { value: "jp", label: "Japanese", flag: JpFlag }, 
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const {t, i18n} = useTranslation();

  const handleChange = (event) => {
    // i18n
    i18n.changeLanguage(event.target.value);


    const selectedValue = event.target.value;
    const language = languages.find((lang) => lang.value === selectedValue);
    setSelectedLanguage(language);
  };

  return (
    <div className="text-white">
      
      <div className="relative w-[40px] mr-7">
        <select
          id="languageSelector"
        //   value={selectedLanguage.value}
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