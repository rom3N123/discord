import React, { FC, ReactElement } from 'react';
import { Box, BoxProps, Center, Divider, Tooltip } from '@chakra-ui/react';
import ServersList from './components/ServersList';
import { DiscordLogoNavigationButton } from './components/DiscordLogoNavigationButton';

export const serversSidebarBoxProps: BoxProps = {
    padding: '12px',
};

export interface ServersSidebarProps {
    isDiscordLogoActive?: boolean;
}

const ServersSidebar: FC<ServersSidebarProps> = ({ isDiscordLogoActive = true }): ReactElement => {
    return (
        <Box
            height="100%"
            borderRight="2px solid"
            borderColor="whiteAlpha.400"
            bg="blackAlpha.600"
            {...serversSidebarBoxProps}>
            <DiscordLogoNavigationButton />

            <Center my="8px">
                <Divider width="80%" />
            </Center>

            <ServersList />
        </Box>
    );
};

export default ServersSidebar;
