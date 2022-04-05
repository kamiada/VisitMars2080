import * as React from "react";
import { Container, CustomButton } from './CustomImageButton.styles';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
    onClick: () => void;
    path: String;
    buttonTitle: String;
}

export const CustomImageButton: FC<Props> = ({ onClick, path, buttonTitle }) => {
    return (
        <Container>
            <CustomButton onClick={onClick}>
                <Link to={`${path}`}>{buttonTitle}</Link>
            </CustomButton>
        </Container>
    )
}