import React from "react";
import "./LanguageSwitch.css";

function LanguageSwitch({ language, toggleLanguage }) {
  return (
    <div className="language-switch">
      <img
        src="/images/flags/poland.png"
        alt="Polska"
        className={`flag ${language === "PL" ? "active" : ""}`}
        onClick={() => toggleLanguage("PL")}
      />
      <img
        src="/images/flags/usa.png"
        alt="USA"
        className={`flag ${language === "EN" ? "active" : ""}`}
        onClick={() => toggleLanguage("EN")}
      />
    </div>
  );
}

export default LanguageSwitch;
