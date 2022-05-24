import * as React from 'react';
import { FC } from 'react';
import { Button, TextContainer } from '../../components';

interface Props {
    onClick: () => void;
    path: String;
    userAdvert: String;
}

export const SecondScreen: FC<Props> = ( {userAdvert} ) => {
    return (
        <>
            <TextContainer text={userAdvert} />
            <Button onClick={() => console.log('here')} path="calendar" buttonTitle={"Hello"}/>
        </>
    )
}
