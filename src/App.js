import "./App.css";
import { Switcher } from "./components";
import { LanguageContext } from "./components/Switcher/language-context";
import { Route, Routes } from "react-router-dom";
import { FirstScreen, SecondScreen } from "./screens";
import { useState } from "react";

function App() {
  // const { language, setLanguage } = useContext(LanguageContext);
  const [language, setLanguage] = useState("ENG");
  function toggleLanguage() {
    setLanguage((language) => {
      if (language === "ENG") {
        return setLanguage("PL");
      }
      if (language === "PL") {
        return setLanguage("FR");
      }
      if (language === "FR") {
        return setLanguage("ENG");
      }
    });
  }
  return (
    <>
      <LanguageContext.Provider value={{ language, toggleLanguage }}>
        <Switcher onClick={() => setLanguage()} />
        <Routes>
          <Route path="/" element={<FirstScreen />} />
          <Route path="/home" element={<SecondScreen />} />
        </Routes>
      </LanguageContext.Provider>
    </>
  );
}

export default App;
