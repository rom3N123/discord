import React from 'react';
import { Text, Icon, ButtonProps } from '@chakra-ui/react';
import { ListItem } from '~/components/shared/list-items/ListItem';
import FriendsIcon from '~icons/friends.svg';

const START = (
    <Icon w="32px" h="32px">
        <FriendsIcon />
    </Icon>
);

const CENTER = (
    <Text fontWeight="500" fontSize="16px">
        Друзья
    </Text>
);

const BUTTON_PROPS: ButtonProps = { isActive: true, bg: 'transparent', w: '100%' };

export const FriendsButton = () => {
    return <ListItem isButton buttonProps={BUTTON_PROPS} start={START} center={CENTER} />;
};
