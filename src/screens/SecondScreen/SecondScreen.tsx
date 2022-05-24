import * as React from 'react';
import { FC } from 'react';
import { Button, TextContainer } from '../../components';
import { Container } from './SecondScreen.styles';

interface Props {
    onClick: () => void;
    path: String;
}

export const SecondScreen: FC<Props> = ( ) => {
    return (
        <Container>
            <TextContainer id="welcomeText" />
            <Button onClick={() => console.log('here')} path="calendar" buttonTitle={"Hello"}/>
        </Container>
    )
}
