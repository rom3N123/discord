import React, { FC } from 'react';
import { Icon } from '@chakra-ui/react';
import { LayoutContent } from '~/components/shared/LayoutContent';
import { LayoutContentHeaderProps } from '~/components/shared/LayoutContentHeader';
import FriendsIcon from '~icons/friends.svg';
import { Header } from './components/Header';

export interface MePageContentProps {}

const HEADER_PROPS: LayoutContentHeaderProps = {
    label: 'Друзья',
    labelIcon: (
        <Icon w="22px" h="22px">
            <FriendsIcon />
        </Icon>
    ),
    children: <Header />,
};

export const MePageContent: FC<MePageContentProps> = () => {
    return <LayoutContent headerProps={HEADER_PROPS} content={<div>INNER</div>} />;
};
