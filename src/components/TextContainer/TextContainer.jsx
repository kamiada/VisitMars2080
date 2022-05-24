import React, {useContext} from 'react';
import { Container } from './TextContainer.styles';
import { LanguageContext, dictionaryList } from '../Switcher/language-context';


export const TextContainer = ({id}) => {
    const { language } = useContext(LanguageContext);
    return (
        <Container >
            <p>{dictionaryList[language][id]}</p>
        </Container>
    )
}