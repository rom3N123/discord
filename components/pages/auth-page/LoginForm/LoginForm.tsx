import React from 'react';
import { Button, Flex, Box, Text } from '@chakra-ui/react';
import { AuthForm } from '../AuthForm';
import { trpc } from '~/utils/trpc';
import { userStore } from '~/store/user.store';
import { useHookFormContext } from '~/contexts/HookFormContext/useHookFormContext';
import { LoginByCredentialsSchema } from '~/server/schemas/auth';
import { HookFormOnSubmit } from '~/types/hook-form';
import { HookFormInput } from '~/components/form-control/HookFormInput';
import { useRouter } from 'next/router';

export interface LoginFormFields {
    email: string;
    password: string;
}

export const LoginForm = () => {
    const { push } = useRouter();

    const { mutate, error, isLoading } = trpc.useMutation(['auth.loginByCredentials'], {
        onSuccess({ user }) {
            userStore.setUser(user);
        },
        onError({ data }) {
            if (data?.code === 'UNAUTHORIZED') {
                push('/auth/login');
            }
        },
    });

    const { handleSubmit } = useHookFormContext<LoginByCredentialsSchema>();

    const onSubmit: HookFormOnSubmit<typeof handleSubmit> = credentials => {
        mutate(credentials);
    };

    return (
        <AuthForm
            title="С возвращением!"
            subtitle="Мы так рады видеть вас снова!"
            redirectTitle="Нужна учетная запись?"
            redirectLinkTitle="Зарегистрироваться"
            redirectLinkHref="/auth/register"
            onSubmit={handleSubmit(onSubmit)}>
            <Box>
                {error && (
                    <Text color="red.500" textAlign="center">
                        {error.message}
                    </Text>
                )}
                <Flex direction="column" gap="20px">
                    <HookFormInput<LoginByCredentialsSchema>
                        isDisabled={isLoading}
                        name="email"
                        label="Email"
                        type="email"
                    />

                    <HookFormInput<LoginByCredentialsSchema>
                        isDisabled={isLoading}
                        name="password"
                        label="Пароль"
                        type="password"
                    />

                    <Button
                        isLoading={isLoading}
                        type="submit"
                        bg="whiteAlpha.800"
                        color="blackAlpha.700"
                        _hover={{ bg: 'whiteAlpha.700' }}>
                        Вход
                    </Button>
                </Flex>
            </Box>
        </AuthForm>
    );
};
