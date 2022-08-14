import React from 'react';
import { AuthPage } from '~/components/pages/auth-page/AuthPage';
import { LoginForm } from '~/components/pages/auth-page/LoginForm';

const Login = () => {
    return (
        <AuthPage>
            <LoginForm />
        </AuthPage>
    );
};

export default Login;
