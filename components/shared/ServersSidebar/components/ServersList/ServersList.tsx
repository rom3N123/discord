import { Flex } from '@chakra-ui/react'
import React, { FC, useState } from 'react'

import { ServerButton } from '~/components/buttons/ServerButton'

export interface ServersListProps {}

const ServersList: FC<ServersListProps> = () => {
  const [hideBar, setHideBar] = useState(false)

  return (
    <Flex direction="column" gap="8px">
      <ServerButton image="https://cspromogame.ru//storage/upload_images/avatars/787.jpg" />
    </Flex>
  )
}

export default ServersList
