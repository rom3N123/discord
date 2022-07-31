import React, { FC, ReactElement } from 'react'
import { Box, BoxProps, Center, Divider, Flex, Tooltip } from '@chakra-ui/react'
import ServersList from './components/ServersList'
import { DiscordLogoButton } from '~/components/buttons/DiscordLogoButton'

export const serversSidebarBoxProps: BoxProps = {
  padding: '12px',
}

const ServersSidebar: FC = (): ReactElement => {
  return (
    <Box
      height="100%"
      borderRight="2px solid"
      borderColor="whiteAlpha.400"
      bg="blackAlpha.500"
      {...serversSidebarBoxProps}
    >
      <Tooltip hasArrow label="Главная">
        <DiscordLogoButton aria-label="Discord logo" />
      </Tooltip>

      <Center margin="8px 0">
        <Divider width="80%" />
      </Center>

      <ServersList />
    </Box>
  )
}

export default ServersSidebar
