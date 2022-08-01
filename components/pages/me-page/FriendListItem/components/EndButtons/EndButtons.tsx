import React from 'react';
import { Flex, FlexProps, Icon, IconButton, Tooltip } from '@chakra-ui/react';
import { ThreeDotsButton } from './components/ThreeDotsButton';
import { MessageIconButton } from '~/components/buttons/MessageIconButton';

export const EndButtons = () => {
    const onContainerClick: FlexProps['onClick'] = (event) => {
        event.stopPropagation();
    };

    return (
        <Flex onClick={onContainerClick} gap="5px" align="center">
            <Tooltip hasArrow label="Сообщение">
                <MessageIconButton aria-label="Отправить сообщение" borderRadius="50%" />
            </Tooltip>

            <Tooltip hasArrow label="Ещё">
                <ThreeDotsButton aria-label="Ещё" borderRadius="50%" />
            </Tooltip>
        </Flex>
    );
};
