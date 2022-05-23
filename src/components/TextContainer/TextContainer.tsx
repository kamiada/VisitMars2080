import * as React from 'react';
import { Container } from './TextContainer.styles';
import { FC } from 'react';

interface Props {
    accessibilityLabel: String;
    text: String
}

export const TextContainer: FC<Props> = ({accessibilityLabel, text}) => {
    return (
        <Container>
            {text}
        </Container>
    )
}