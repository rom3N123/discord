import { Icon } from '@chakra-ui/react';
import React, { FC } from 'react';
import Layout from '~/components/shared/Layout';
import { LayoutContent } from '~/components/shared/LayoutContent';
import { LayoutContentHeaderProps } from '~/components/shared/LayoutContentHeader';
import { ReactContentSlot } from '~/types/react';
import FriendsIcon from '~icons/friends.svg';
import { Header } from '../Header';
import { MePageContent } from '../MePageContent';
import { MePageSidebar } from '../MePageSidebar';

export interface MePageProps {}

export enum ME_CONTENT_IDS {
    INDEX = '',
    ALL = 'all',
    PENDING = 'pending',
    ADD = 'add',
}

const getRoute = (path: string) => `/me/${path}`;

export const ME_HREFS = {
    INDEX: getRoute(ME_CONTENT_IDS.INDEX),
    ALL: getRoute(ME_CONTENT_IDS.ALL),
    PENDING: getRoute(ME_CONTENT_IDS.PENDING),
    ADD: getRoute(ME_CONTENT_IDS.ADD),
};

const HEADER_PROPS: LayoutContentHeaderProps = {
    label: 'Друзья',
    labelIcon: (
        <Icon w="22px" h="22px">
            <FriendsIcon />
        </Icon>
    ),
    children: <Header />,
};

export const MePage: FC<MePageProps> = () => {
    return (
        <Layout
            sidebar={<MePageSidebar />}
            content={<LayoutContent headerProps={HEADER_PROPS} content={<MePageContent />} />}
        />
    );
};
