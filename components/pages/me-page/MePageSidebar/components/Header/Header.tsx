import React, { FC } from 'react';
import { Input } from '@chakra-ui/react';

export const Header: FC = () => {
    return (
        <Input
            padding="5px"
            placeholder="Find or start a conversation"
            borderRadius="3px"
            h="100%"
        />
    );
};
