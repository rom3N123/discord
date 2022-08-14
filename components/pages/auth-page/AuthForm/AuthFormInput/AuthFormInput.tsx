import React, { FC } from 'react';
import { Input, InputProps } from '@chakra-ui/react';
import { colors } from '~/theme/colors';

export const AuthFormInput: FC<InputProps> = (props) => {
    return (
        <Input bg={colors.primary['900']} _placeholder={{ color: 'whiteAlpha.700' }} {...props} />
    );
};
