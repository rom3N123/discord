import React, { FC } from 'react';
import { FlexProps, ListItemProps } from '@chakra-ui/react';
import { UserInfoListItem } from '~/components/shared/list-items/user-list-items/UserInfoListItem';
import { EndButtons } from './components/EndButtons';
import Link from 'next/link';

export interface FriendListItemProps {}

const listItemProps: ListItemProps = {
    w: '100%',
    h: '60px',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all .2s ease',
    _hover: {
        bg: 'whiteAlpha.300',
    },
};

export const FriendListItem: FC<FriendListItemProps> = ({}) => {
    return (
        <Link href="/users/1">
            <UserInfoListItem topText="Roma" end={<EndButtons />} {...listItemProps} />
        </Link>
    );
};
