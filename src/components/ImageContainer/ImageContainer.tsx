import * as React from "react";
import { Container } from './ImageContainer.styles';
import { FC } from 'react';

interface Props {
    label: string;
    source: string;
}

export const ImageContainer: FC<Props> = ({label, source}) => {
    return (
        <Container>
            <img alt={label} src={source} />
        </Container>
    )
}