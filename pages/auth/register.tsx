import React from 'react';
import { AuthPage } from '~/components/pages/auth-page/AuthPage';
import { HookFormContextProvider } from '~/contexts/HookFormContext';
import { RegisterForm } from '~/components/pages/auth-page/RegisterForm';
import { registerSchema } from '~/server/schemas/auth';

const Register = () => {
    return (
        <AuthPage>
            <HookFormContextProvider schema={registerSchema}>
                <RegisterForm />
            </HookFormContextProvider>
        </AuthPage>
    );
};

export default Register;
