import i18n from "i18next";
import { useState, useEffect } from "react";

export function LanguageSwitcher() {
  const [lang, setLang] = useState(i18n.language);

  useEffect(() => {
    const handleChange = (lng) => setLang(lng);
    i18n.on("languageChanged", handleChange);
    return () => i18n.off("languageChanged", handleChange);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="absolute top-6 right-6">
      <div className="flex items-center bg-white/70 backdrop-blur-md border border-secondary/10 rounded-full p-1 shadow-sm">
        <button
          onClick={() => changeLanguage("pt")}
          className={`px-3 py-1 text-sm rounded-full transition ${
            lang === "pt"
              ? "bg-primary text-white shadow"
              : "text-secondary/70 hover:text-secondary"
          }`}
        >
          PT
        </button>

        <button
          onClick={() => changeLanguage("en")}
          className={`px-3 py-1 text-sm rounded-full transition ${
            lang === "en"
              ? "bg-primary text-white shadow"
              : "text-secondary/70 hover:text-secondary"
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
}
