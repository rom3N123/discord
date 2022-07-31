import React from 'react';
import { Box } from '@chakra-ui/react';
import { PAGE_SIDEBAR_CONTENT_PADDING_PX } from '~/components/shared/PageSidebar';
import { Navigation } from './components/Navigation';

export const Content = () => {
    return (
        <Box padding={PAGE_SIDEBAR_CONTENT_PADDING_PX}>
            <Navigation />
        </Box>
    );
};
