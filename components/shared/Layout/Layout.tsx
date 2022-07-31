import React, { FC, ReactElement } from 'react';
import ServersSidebar from '~/components/shared/ServersSidebar';
import { Flex, Box } from '@chakra-ui/react';

export interface LayoutProps {
    sidebar: ReactElement<any>;
    content: ReactElement<any>;
}

const Layout: FC<LayoutProps> = ({ sidebar, content }): ReactElement => {
    return (
        <Flex bg="app.background.secondary" overflow="hidden" height="100vh" width="100vw">
            <Box width="70px">
                <ServersSidebar />
            </Box>

            {sidebar}

            {content}
        </Flex>
    );
};

export default Layout;
