import React, { FC } from 'react';
import { Flex } from '@chakra-ui/react';
import { SidebarServerButton } from '~/components/buttons/SidebarServerButton';
import { useRouter } from 'next/router';
import Link from 'next/link';

export interface ServersListProps {}

const servers: { id: number }[] = [{ id: 1 }, { id: 4 }];

const ServersList: FC<ServersListProps> = () => {
    const {
        query: { channelId },
    } = useRouter();

    return (
        <Flex direction="column" gap="8px">
            {servers.map(({ id }) => {
                return (
                    <Link href={`/channels/${id}`}>
                        <SidebarServerButton
                            isActive={channelId === id.toString()}
                            key={id}
                            label="Server"
                            aria-label="Server"
                            image="https://cspromogame.ru//storage/upload_images/avatars/787.jpg"
                        />
                    </Link>
                );
            })}
        </Flex>
    );
};

export default ServersList;
