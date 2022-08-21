import React, { FC, ReactNode, useEffect } from 'react';
import AuthPageBg from '~icons/auth-page-bg.svg';
import { Box } from '@chakra-ui/react';

export interface AuthPageProps {
    children?: ReactNode;
}

export const AuthPage: FC<AuthPageProps> = ({ children }) => {
    return (
        <Box
            as="section"
            height="100vh"
            width="100vw"
            backgroundImage={`url(${AuthPageBg})`}
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundPosition="center"
            display="flex"
            alignItems="center"
            justifyContent="center">
            {children}
        </Box>
    );
};
