import { Box } from '@chakra-ui/react';
import React, { FC } from 'react';
import { ReactContentSlot } from '~/types/react';
import { LayoutContentHeader, LayoutContentHeaderProps } from '../LayoutContentHeader';

export interface LayoutContentProps {
    content: ReactContentSlot;
    headerProps: LayoutContentHeaderProps;
}

export const LayoutContent: FC<LayoutContentProps> = ({ headerProps, content }) => {
    return (
        <Box height="100%" flexGrow="1">
            <LayoutContentHeader {...headerProps} />

            {content}
        </Box>
    );
};
