import React, { FC, ReactElement } from 'react';
import { Avatar, Flex, Text } from '@chakra-ui/react';

type Content = ReactElement<any>;

export interface UserListItemProps {
    center?: Content;
    end?: Content;
}

export const UserListItem: FC<UserListItemProps> = ({ center, end }) => {
    return (
        <Flex p="5px 8px" align="center" h="42px">
            <Flex width="100%" gap="12px" align="center">
                <Avatar w={'32px'} h="32px" />

                {center}

                {end}
            </Flex>
        </Flex>
    );
};
