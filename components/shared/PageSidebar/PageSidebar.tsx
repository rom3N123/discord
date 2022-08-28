import React, { FC } from 'react';
import { Box, BoxProps, Flex } from '@chakra-ui/react';
import { px } from '~/helpers';
import { ReactContentSlot } from '~/types/react';
import { LayoutItemHeader } from '../LayoutItemHeader';
import { UserControl } from '../controls/UserControl';

export const SIDEBAR_WIDTH = 240;
export const SIDEBAR_WIDTH_PX = px(SIDEBAR_WIDTH);

export const PAGE_SIDEBAR_CONTENT_PADDING = 8;
export const PAGE_SIDEBAR_CONTENT_PADDING_PX = px(PAGE_SIDEBAR_CONTENT_PADDING);

export interface PageSidebarProps extends BoxProps {
    header: ReactContentSlot;
    content: ReactContentSlot;
}

export const PageSidebar: FC<PageSidebarProps> = ({ header, content, ...otherProps }) => {
    return (
        <Flex
            direction="column"
            height="100%"
            width={SIDEBAR_WIDTH_PX}
            bg="blackAlpha.300"
            {...otherProps}>
            <LayoutItemHeader padding={PAGE_SIDEBAR_CONTENT_PADDING_PX}>{header}</LayoutItemHeader>

            <Box flexGrow="1">{content}</Box>

            <UserControl />
        </Flex>
    );
};
