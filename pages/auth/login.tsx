import React from 'react';
import { AuthPage } from '~/components/pages/auth-page/AuthPage';
import { LoginForm } from '~/components/pages/auth-page/LoginForm';
import { trpc } from '~/utils/trpc';

const Login = () => {
    const data = trpc.useQuery(['me.hello']);

    console.log({ data });

    return (
        <AuthPage>
            <LoginForm />
        </AuthPage>
    );
};

export default Login;
