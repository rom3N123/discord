import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Flex } from '@chakra-ui/react';
import { AuthForm } from '../AuthForm';
import { AuthFormInput } from '../AuthForm/AuthFormInput';

export interface LoginFormFields {
    email: string;
    password: string;
}

export const LoginForm = () => {
    const { register, handleSubmit } = useForm<LoginFormFields>();

    const onSubmit = (data: LoginFormFields) => {
        console.log(data);
    };

    return (
        <AuthForm
            title="С возвращением!"
            subtitle="Мы так рады видеть вас снова!"
            redirectTitle="Нужна учетная запись?"
            redirectLinkTitle="Зарегистрироваться"
            redirectLinkHref="/auth/register"
            onSubmit={handleSubmit(onSubmit)}>
            <Flex direction="column" gap="20px">
                <AuthFormInput type="email" placeholder="Адрес электронной почты" />

                <AuthFormInput type="password" placeholder="Пароль" />

                <Button
                    bg="whiteAlpha.800"
                    color="blackAlpha.700"
                    _hover={{ bg: 'whiteAlpha.700' }}>
                    Вход
                </Button>
            </Flex>
        </AuthForm>
    );
};
