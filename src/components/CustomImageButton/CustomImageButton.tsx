import * as React from "react";
import { Container, CustomButton } from './CustomImageButton.styles';
import { FC } from 'react';

interface Props {
    onClick: () => void;
    srcImage?: String;
}

export const CustomImageButton: FC<Props> = ({onClick, srcImage}) => {
    return (
        <Container>
            <CustomButton>Here</CustomButton>
        </Container>
    )
}