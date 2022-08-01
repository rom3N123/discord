import { List } from '@chakra-ui/react';
import React from 'react';
import { FriendsButton } from './components/FriendsButton';

export const Navigation = () => {
    return (
        <List>
            <FriendsButton />
        </List>
    );
};
