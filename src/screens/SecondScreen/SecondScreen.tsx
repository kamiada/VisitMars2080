import * as React from 'react';
import { FC } from 'react';
import { Button, ImageContainer, TextContainer } from '../../components';
import { Container, ButtonContainer } from './SecondScreen.styles';


interface Props {
    onClick: () => void;
    path: String;
}

export const SecondScreen: FC<Props> = ( ) => {
    return (
        <Container>
            <ImageContainer />
            <TextContainer id="welcomeText" />
            <ButtonContainer>
                <Button onClick={() => console.log('here')} path="calendar" buttonTitle={"Next"} />
            </ButtonContainer>
        </Container>
    )
}
