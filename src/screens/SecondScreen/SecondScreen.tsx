import * as React from 'react';
import { FC } from 'react';
import { Button, TextContainer } from '../../components';
import { Container, ButtonContainer } from './SecondScreen.styles';
// import  * as Rocket from '../../assets/images/rocket.svg';
import { createApi } from "unsplash-js";

interface Props {
    onClick: () => void;
    path: String;
}

export const SecondScreen: FC<Props> = ( ) => {
    return (
        <Container>
            <TextContainer id="welcomeText" />
            <ButtonContainer>
                <Button onClick={() => console.log('here')} path="calendar" buttonTitle={"Next"} />
            </ButtonContainer>
        </Container>
    )
}
