import "./App.css";
import { Switcher } from "./components";
import { LanguageContext } from "./components/Switcher/language-context";
import { Route, Routes } from "react-router-dom";
import { FirstScreen, SecondScreen } from "./screens";
import { useState } from "react";

function App() {
  const changeLang = () => {
    console.log("here");
    if (language === "ENG") {
      return setLanguage("PL");
    }
    if (language === "PL") {
      return setLanguage("FR");
    }
    if (language === "FR") {
      return setLanguage("ENG");
    }
  };
  const [language, setLanguage] = useState("ENG");
  return (
    <>
      <LanguageContext.Provider value={language}>
      <Routes>
        <Route path="/" element={<FirstScreen />} />
        <Route path="/home" element={<SecondScreen userAdvert={"test"}/>} />
      </Routes>
        <Switcher onClick={() => changeLang()} />
      </LanguageContext.Provider>
    </>
  );
  // const changeLang = () => {
  //   console.log("here");
  //   if (language === "ENG") {
  //     return setLanguage("PL");
  //   }
  //   if (language === "PL") {
  //     return setLanguage("FR");
  //   }
  //   if (language === "FR") {
  //     return setLanguage("ENG");
  //   }
  // };
  // const [language, setLanguage] = useState("ENG");
  // return (
  //   <div className="App">
  // <LanguageContext.Provider value={language}>
  //   <Switcher onClick={() => changeLang()}/>
  // </LanguageContext.Provider>
  //   </div>
  // );
}

export default App;
