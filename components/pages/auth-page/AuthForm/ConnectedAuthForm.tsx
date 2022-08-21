import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { HookFormInput } from '~/components/form-control/HookFormInput';
import { useHookFormContext } from '~/contexts/HookFormContext/useHookFormContext';
import { AuthForm } from './AuthForm';
import { RegisterSchema } from '~/server/schemas/auth';
import { HookFormOnSubmit } from '~/types/hook-form';
import { trpc } from '~/utils/trpc';

export const ConnectedAuthForm = () => {
    const { mutate, error, isLoading } = trpc.useMutation(['auth.register']);

    const { handleSubmit } = useHookFormContext<RegisterSchema>();

    const onSubmit: HookFormOnSubmit<typeof handleSubmit> = data => {
        mutate(data);
    };

    return (
        <AuthForm
            title="Создать учетную запись"
            redirectTitle="Уже зарегистрированы?"
            redirectLinkTitle="Войти"
            redirectLinkHref="/auth/login"
            onSubmit={handleSubmit(onSubmit)}>
            <Box>
                {error && (
                    <Text color="red.500" textAlign="center">
                        {error.message}
                    </Text>
                )}

                <Flex direction="column" gap="20px">
                    <HookFormInput<RegisterSchema>
                        isDisabled={isLoading}
                        name="email"
                        label="Email"
                    />
                    <HookFormInput<RegisterSchema> isDisabled={isLoading} name="name" label="Имя" />
                    <HookFormInput<RegisterSchema>
                        isDisabled={isLoading}
                        name="password"
                        type="password"
                        label="Пароль"
                    />
                    <Button
                        isLoading={isLoading}
                        type="submit"
                        bg="whiteAlpha.800"
                        color="blackAlpha.700"
                        _hover={{ bg: 'whiteAlpha.700' }}>
                        Продолжить
                    </Button>
                </Flex>
            </Box>
        </AuthForm>
    );
};
