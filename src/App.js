import "./App.css";
import { Switcher } from "./components";
import { LanguageContext } from "./components/Switcher/language-context";
import { useState } from "react";

function App() {
  const  changeLang = () => {
    console.log('here');
    if(language === "English") {
      return setLanguage("Polish");
    }
    if(language === "Polish"){
      return setLanguage("French");
    }
    if(language === "French"){
      return setLanguage("English");
    }
  }
  const [language, setLanguage] = useState("English");
  return (
    <div className="App">
      <LanguageContext.Provider value={language}>
        <Switcher onClick={() => changeLang()}/>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
