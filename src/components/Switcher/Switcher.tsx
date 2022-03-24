import * as React from 'react';
import {FC} from 'react';
import { Container, SwitchButton } from './Switcher.styles';
interface Props {
    language: string;
}

export const Switcher: FC<Props> = ({ language }) => {
    return (
        <Container>
            <SwitchButton>
                Test
            </SwitchButton>
        </Container>
    )
}