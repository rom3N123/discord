import React, { FC, ReactElement } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
import { px } from '~/helpers';
import { ReactContentSlot } from '~/types/react';
import { LAYOUT_HEADER_HEIGHT_PX } from '../Layout';

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
        <Box height="100%" width={SIDEBAR_WIDTH_PX} bg="blackAlpha.300" {...otherProps}>
            <Box
                padding={PAGE_SIDEBAR_CONTENT_PADDING_PX}
                height={LAYOUT_HEADER_HEIGHT_PX}
                borderBottom="2px solid"
                borderColor="whiteAlpha.400">
                {header}
            </Box>

            {content}
        </Box>
    );
};
