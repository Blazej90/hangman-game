// import React from "react";
// import Switch from "react-switch";
// import "./LanguageSwitch.css";

// function LanguageSwitch({ language, toggleLanguage }) {
//   return (
//     <div className="language-switch">
//       <img src="/images/flags/poland.png" alt="Polska" className="flag" />
//       <Switch
//         onChange={toggleLanguage}
//         checked={language === "EN"}
//         offColor="#ffcc00"
//         onColor="#007bff"
//         offHandleColor="#f00"
//         onHandleColor="#fff"
//         checkedIcon={false}
//         uncheckedIcon={false}
//         height={20}
//         width={48}
//         handleDiameter={24}
//       />
//       <img src="/images/flags/usa.png" alt="USA" className="flag" />
//     </div>
//   );
// }

// export default LanguageSwitch;

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
