import React from 'react';
import { AuthPage } from '~/components/pages/auth-page/AuthPage';
import { trpc } from '~/utils/trpc';
import { HookFormContextProvider } from '~/contexts/HookFormContext';
import { ConnectedAuthForm } from '~/components/pages/auth-page/AuthForm/ConnectedAuthForm';
import { registerSchema } from '~/server/schemas/auth';

export interface RegisterFormInputs {
    email: string;
    password: string;
    name: string;
}

const Register = () => {
    const {} = trpc.useMutation(['auth.register']);

    return (
        <AuthPage>
            <HookFormContextProvider schema={registerSchema}>
                <ConnectedAuthForm />
            </HookFormContextProvider>
        </AuthPage>
    );
};

export default Register;
