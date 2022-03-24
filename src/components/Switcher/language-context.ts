import * as React from "react";

export const languages = {
    "English": [
        { "exampleLine":"Hello World"}
     ],
     "French": [
         {
             "exampleLine":"Bonjour le monde"
         }
     ],
     "Polish": [
         {
             "exampleLine":"Witaj Świecie"
         }
     ]
  };
  
  export const LanguageContext = React.createContext(languages.English);