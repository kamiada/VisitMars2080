import * as React from "react";
import { Container, CustomButton } from './CustomImageButton.styles';
import { FC } from 'react';

interface Props {
    onClick: () => void;
}

export const CustomImageButton: FC<Props> = ({onClick}) => {
    return (
        <Container>
            <CustomButton>Here</CustomButton>
        </Container>
    )
}