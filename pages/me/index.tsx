import React from 'react';
import { MePage } from '~/components/pages/me-page/MePage';
import { trpc } from '~/utils/trpc';

const Index = () => {
    const { data, error } = trpc.useMutation(['auth.loginByAccessToken']);
    console.log({ data, error });

    return <MePage />;
};

export default Index;
