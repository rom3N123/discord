import React from 'react';
import { Button, Flex } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { AuthForm } from '~/components/pages/auth-page/AuthForm';
import { AuthFormInput } from '~/components/pages/auth-page/AuthForm/AuthFormInput';
import { AuthPage } from '~/components/pages/auth-page/AuthPage';

const Register = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = () => {};

    return (
        <AuthPage>
            <AuthForm
                title="Создать учетную запись"
                redirectTitle="Уже зарегистрированы?"
                redirectLinkTitle="Войти"
                redirectLinkHref="/auth/login"
                onSubmit={handleSubmit(onSubmit)}>
                <Flex direction="column" gap="20px">
                    <AuthFormInput type="email" placeholder="E-mail" />

                    <AuthFormInput placeholder="Имя пользователя" />

                    <AuthFormInput type="password" placeholder="Пароль" />

                    <Button
                        bg="whiteAlpha.800"
                        color="blackAlpha.700"
                        _hover={{ bg: 'whiteAlpha.700' }}>
                        Продолжить
                    </Button>
                </Flex>
            </AuthForm>
        </AuthPage>
    );
};

export default Register;
