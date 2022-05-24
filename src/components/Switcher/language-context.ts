import * as React from "react";
import PL from '../../assets/text/pl.json';
import ENG from '../../assets/text/eng.json';
import FR from '../../assets/text/fr.json';

export const dictionaryList = { ENG, FR, PL };

export const languageOptions = {
    ENG: 'English', FR: 'French', PL: 'Polish'
};

export const LanguageContext = React.createContext({ userLanguage: 'ENG', dictionary: dictionaryList.ENG });
