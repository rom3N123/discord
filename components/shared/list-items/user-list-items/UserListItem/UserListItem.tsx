import React, { FC } from 'react';
import { Avatar } from '@chakra-ui/react';
import { ListItem, ListItemProps } from '../../ListItem';

export interface UserListItemProps extends Omit<ListItemProps, 'start'> {}

export const UserListItem: FC<UserListItemProps> = ({ center, end }) => {
    const start = <Avatar w={'32px'} h="32px" />;

    return <ListItem start={start} center={center} end={end} />;
};
