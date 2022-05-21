import * as React from 'react';
import { FC } from 'react';
import { Image } from './FirstScreen.styles';
import { Button, Title } from '../../components';

// interface Props {
//     onClick: () => void;
// }

export const FirstScreen: FC = ({ }) => {
    return (
        <>
            <Title onClick={() => console.log('here')} path="Here" title="MARS" />
        </>
    )
}
