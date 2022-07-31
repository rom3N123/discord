import React, { FC } from 'react';
import { Flex } from '@chakra-ui/react';
import { SidebarServerButton } from '~/components/buttons/SidebarServerButton';
import { useRouter } from 'next/router';

export interface ServersListProps {}

const servers: { id: number }[] = [{ id: 1 }, { id: 4 }];

const ServersList: FC<ServersListProps> = () => {
    const {
        query: { channelId },
        push,
    } = useRouter();

    const onServerClick = (id: number) => () => {
        push(`/channels/${id}`);
    };

    return (
        <Flex direction="column" gap="8px">
            {servers.map(({ id }) => {
                return (
                    <SidebarServerButton
                        onClick={onServerClick(id)}
                        isActive={channelId === id.toString()}
                        key={id}
                        label="Server"
                        aria-label="Server"
                        image="https://cspromogame.ru//storage/upload_images/avatars/787.jpg"
                    />
                );
            })}
        </Flex>
    );
};

export default ServersList;
