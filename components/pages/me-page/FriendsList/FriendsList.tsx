import { Divider, Flex, List, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { FriendListItem } from '../FriendListItem';

export interface FriendsListProps {
    title: string;
}

export const FriendsList: FC<FriendsListProps> = ({ title }) => {
    return (
        <Flex direction="column">
            <Text fontSize="14px" fontWeight="700">
                {title.toUpperCase()} - 100
            </Text>

            <Divider width="100%" mt="8px" />

            <List>
                <FriendListItem />
            </List>
        </Flex>
    );
};
