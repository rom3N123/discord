import React from 'react';
import { Text, Icon, ButtonProps, Flex, Button, ListItemProps } from '@chakra-ui/react';
import { ListItem } from '~/components/shared/list-items/ListItem';
import FriendsIcon from '~icons/friends.svg';

const START = (
    <Flex align="center" gap="12px">
        <Icon w="32px" h="32px">
            <FriendsIcon />
        </Icon>
        <Text fontWeight="500" fontSize="16px">
            Друзья
        </Text>
    </Flex>
);

const BUTTON_PROPS: ButtonProps = { isActive: true, bg: 'transparent', w: '100%' };

export const FriendsButton = () => {
    return <ListItem as={Button} start={START} {...(BUTTON_PROPS as ListItemProps)} />;
};
