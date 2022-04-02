import * as React from "react";
import { Container, CustomButton } from './CustomImageButton.styles';
import { FC } from 'react';

interface Props {
    onClick: () => void;
    text: String;
}

export const CustomImageButton: FC<Props> = ({ onClick, text }) => {
    return (
        <Container>
            <CustomButton onClick={onClick}>{text}</CustomButton>
        </Container>
    )
}