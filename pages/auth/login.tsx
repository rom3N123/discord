import React from 'react';
import { AuthPage } from '~/components/pages/auth-page/AuthPage';
import { LoginForm } from '~/components/pages/auth-page/LoginForm';
import { HookFormContextProvider } from '~/contexts/HookFormContext';
import { loginByCredentialsSchema } from '~/server/schemas/auth';

const Login = () => {
    return (
        <AuthPage>
            <HookFormContextProvider schema={loginByCredentialsSchema}>
                <LoginForm />
            </HookFormContextProvider>
        </AuthPage>
    );
};

export default Login;
