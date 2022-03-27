import * as React from 'react';
import { FC } from 'react';
import { Image } from './FirstScreen.styles';

interface Props {
    onClick: () => void;
}

export const FirstScreen: FC<Props> = ({ onClick }) => {
    return (
        <Image src={require("../../assets/images/LittlePlanet.png")} />
            
        
    )
}
