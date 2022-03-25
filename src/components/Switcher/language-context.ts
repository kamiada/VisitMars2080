import * as React from "react";

export const languages = {
    "ENG": [
        { "exampleLine":"Hello World"}
     ],
     "FR": [
         {
             "exampleLine":"Bonjour le monde"
         }
     ],
     "PL": [
         {
             "exampleLine":"Witaj Świecie"
         }
     ]
  };
  
  export const LanguageContext = React.createContext(languages.ENG);