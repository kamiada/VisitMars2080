import * as React from 'react';
import { Container } from './TextContainer.styles';
import { FC } from 'react';

interface Props {
    text: String
}

export const TextContainer: FC<Props> = ({text}) => {
    return (
        <Container >
            {text}
        </Container>
    )
}