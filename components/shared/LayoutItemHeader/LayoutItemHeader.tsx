import { Box, BoxProps } from '@chakra-ui/react';
import React, { FC } from 'react';

export interface LayoutItemHeaderProps extends BoxProps {}

import { px } from '~/helpers';

export const LAYOUT_HEADER_HEIGHT = 50;
export const LAYOUT_HEADER_HEIGHT_PX = px(LAYOUT_HEADER_HEIGHT);

export const LayoutItemHeader: FC<LayoutItemHeaderProps> = ({ children, ...otherProps }) => {
    return (
        <Box
            height={LAYOUT_HEADER_HEIGHT_PX}
            borderBottom="2px solid"
            borderColor="whiteAlpha.400"
            {...otherProps}>
            {children}
        </Box>
    );
};
