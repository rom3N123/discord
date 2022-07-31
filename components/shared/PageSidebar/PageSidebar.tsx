import React, { FC } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
import { px } from '~/helpers';
import { UserInfoListItem } from '../list-items/user-list-items/UserInfoListItem';

export const SIDEBAR_WIDTH = 240;
const SIDEBAR_WIDTH_PX = px(SIDEBAR_WIDTH);

export interface PageSidebarProps extends BoxProps {}

export const PageSidebar: FC<PageSidebarProps> = (props) => {
    return (
        <Box height="100%" width={SIDEBAR_WIDTH_PX} bg="blackAlpha.400" {...props}>
            <UserInfoListItem
                topText="Roman"
                bottomText="Playing GTA VAAAAAAAAAAAAVAAAAAAAAAAAAVAAAAAAAAAAAA"
            />
        </Box>
    );
};
