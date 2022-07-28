import { useState } from "react";
import i18next from "i18next";
import cookies from "js-cookie";

import "./index.sass";

export default function LanguageFlags() {
  const [langSwitchOpened, setLangSwitchOpened] = useState(false);

  const languages = [
    {
      code: "ua",
      country_code: "ua",
      name: "Солов'їна",
    },
    {
      code: "en",
      country_code: "gb",
      name: "English",
    },
  ];

  const currentLanguageCode = cookies.get("i18next") || "en";

  languages.sort(({ code: codeA }, { code: codeB }) => {
    if (currentLanguageCode === codeA) return -1;
    if (currentLanguageCode === codeB) return 1;
    return 0;
  });

  return (
    <div
      className={`header-language ${
        langSwitchOpened ? "header-language-active" : ""
      }`}>
      {languages.map(({ code, name, country_code }) => {
        const isThatLang = code === currentLanguageCode;
        return (
          <button
            key={country_code}
            className={`header-language-item ${
              langSwitchOpened || isThatLang
                ? "header-language-item-active"
                : ""
            }`}
            onClick={() => {
              i18next.changeLanguage(code);
              setLangSwitchOpened(!langSwitchOpened);
            }}>
            <img
              src={require(`../../assets/images/flag-${code}.png`)}
              className={`header-language-item-flag ${
                langSwitchOpened ? "active" : ""
              }`}
              alt="Flag"
            />
            <span
              className={`header-language-item-text ${
                langSwitchOpened ? "active" : ""
              } ${code === "ua" ? "ua-color" : ""}`}>
              {name}
            </span>
            <div
              className={`header-language-item-arrow ${
                isThatLang ? "active" : ""
              }`}>
              <div
                className={`header-language-item-arrow-line ${
                  langSwitchOpened ? "active" : ""
                }`}
              />
              <div
                className={`header-language-item-arrow-line ${
                  langSwitchOpened ? "active" : ""
                }`}
              />
            </div>
          </button>
        );
      })}
    </div>
  );
}
