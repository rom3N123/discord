import React, { FC, ReactNode } from 'react';
import { Link, Box, Text, Flex } from '@chakra-ui/react';
import { SubmitHandler } from 'react-hook-form';
import { colors } from '~/theme/colors';
import NextLink from 'next/link';

export interface AuthFormProps {
    title: string;
    redirectTitle: string;
    redirectLinkTitle: string;
    redirectLinkHref: string;
    subtitle?: string;
    children?: ReactNode;
    onSubmit: SubmitHandler<any>;
}

export const AuthForm: FC<AuthFormProps> = ({
    children,
    onSubmit,
    title,
    subtitle,
    redirectTitle,
    redirectLinkTitle,
    redirectLinkHref,
}) => {
    return (
        <Box
            borderRadius="5px"
            boxShadow="0 2px 10px 0 hsla(0,calc(var(1, 1)*0%),0%,.2)"
            p="32px"
            bg={colors.primary['700']}
            maxWidth="420px"
            width="100%"
            as="form"
            onSubmit={onSubmit}>
            <Box mb="20px">
                <Text fontSize="25px" fontWeight="700" textAlign="center">
                    {title}
                </Text>
                {subtitle && <Text textAlign="center">{subtitle}</Text>}
            </Box>

            {children}

            <Flex fontSize="14px" align="center" mt="10px" gap="5px">
                <Text color="gray.400">{redirectTitle}</Text>{' '}
                <NextLink href={redirectLinkHref}>
                    <Link color={colors.link}>{redirectLinkTitle}</Link>
                </NextLink>
            </Flex>
        </Box>
    );
};
