import * as React from 'react';
import { Container, SwitchButton } from './Switcher.styles';
import { LanguageContext } from './language-context';


export const Switcher: React.FC<{}> = props => {
    const langContext = React.useContext(LanguageContext);
    return (
        <Container>
            <SwitchButton>
                {props}
                {langContext}
            </SwitchButton>
        </Container>
    )
}
