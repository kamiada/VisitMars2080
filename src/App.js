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
        <Routes>
          <Route path="/" element={<FirstScreen />} />
          <Route path="/home" element={<SecondScreen userAdvert={"test"} />} />
        </Routes>
        <Switcher onClick={() => setLanguage()} />
      </LanguageContext.Provider>
    </>
  );
}

export default App;
