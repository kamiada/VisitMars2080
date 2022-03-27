import * as React from 'react';
import { FC } from 'react';
import { Layout } from '../../components'

interface Props {
    onClick: () => void;
}

export const FirstScreen: FC<Props> = ({ onClick }) => {
    return (
        <Layout>
            Booo``
        </Layout>
    )
}
