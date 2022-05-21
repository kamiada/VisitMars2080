import * as React from 'react';
import { FC } from 'react';
import { Button } from '../../components';

export const SecondScreen: FC = ({ }) => {
    return (
        <>
            <Button onClick={() => console.log('here')} path="calendar" buttonTitle={"Hello"}/>
        </>
    )
}
