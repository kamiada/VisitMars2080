import * as React from 'react';
import { Container, SwitchButton } from './Switcher.styles';
import { LanguageContext } from './language-context';
import { FC } from 'react';

interface Props {
    onClick: () => void;
}

export const Switcher: FC<Props> = ({ onClick }) => {
    // const { userLanguage, userLanguageChange } = React.useContext(LanguageContext);

    const langContext = React.useContext(LanguageContext);
    return (
        <Container>
            <SwitchButton onClick={onClick}>
                {langContext}
            </SwitchButton>
        </Container>
    )
}
