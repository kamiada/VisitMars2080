import * as React from "react";
import { Container, CustomNav, CustomText } from './Title.styles';
import { FC } from 'react';
import { Link } from 'react-router-dom';


interface Props {
    onClick: () => void;
    path: String;
    title: String;
}

export const Title: FC<Props> = ({ onClick, path, title }) => {
    return (
        <Container>
            <CustomNav onClick={onClick}>
                <Link to={`${path}`}>
                    <CustomText>{title}</CustomText>
                </Link>
            </CustomNav>
        </Container>
    )
}