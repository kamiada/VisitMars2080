import * as React from 'react';
import { FC } from 'react';
import { Image } from './FirstScreen.styles';
import { Button } from '../../components';

// interface Props {
//     onClick: () => void;
// }

export const FirstScreen: FC = ({ }) => {
    return (
        <>
            <Image src={require("../../assets/images/LittlePlanet.png")}></Image>
            <Button onClick={() => console.log('here')} path="Here" buttonTitle="Click me" />
        </>
    )
}
