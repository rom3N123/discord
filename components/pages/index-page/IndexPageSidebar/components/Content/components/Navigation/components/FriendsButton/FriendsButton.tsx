import React from 'react';
import { Text, Icon } from '@chakra-ui/react';
import { ListItem } from '~/components/shared/list-items/ListItem';
import FriendsIcon from '~icons/friends.svg';

export const FriendsButton = () => {
    return (
        <ListItem
            isButton
            buttonProps={{ bg: 'transparent', w: '100%' }}
            start={
                <Icon w="32px" h="32px">
                    <FriendsIcon />
                </Icon>
            }
            center={
                <Text fontWeight="500" fontSize="16px">
                    Friends
                </Text>
            }
        />
    );
};
