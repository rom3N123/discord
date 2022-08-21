import React, { forwardRef } from 'react';
import { Input, InputProps } from '@chakra-ui/react';
import { colors } from '~/theme/colors';

export const AuthFormInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    return (
        <Input
            ref={ref}
            bg={colors.primary['900']}
            _placeholder={{ color: 'whiteAlpha.700' }}
            {...props}
        />
    );
});
