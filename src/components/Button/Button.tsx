import * as React from "react";
import { Container, CustomNav } from './Button.styles';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
    onClick: () => void;
    path: String;
    buttonTitle: String;
}

export const Button: FC<Props> = ({ onClick, path, buttonTitle }) => {
    return (
        <Container>
            <CustomNav onClick={onClick}>
                <Link to={`${path}`}>{buttonTitle}</Link>
            </CustomNav>
        </Container>
    )
}