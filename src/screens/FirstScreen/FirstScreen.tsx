import * as React from 'react';
import { FC } from 'react';
import { Title } from '../../components';

// interface Props {
//     onClick: () => void;
// }

export const FirstScreen: FC = ({ }) => {
    return (
        <>
            <Title onClick={() => console.log('here')} path="home" title="MARS" />
        </>
    )
}
