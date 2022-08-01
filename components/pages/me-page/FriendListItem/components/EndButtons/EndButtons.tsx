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
            <MessageIconButton aria-label="Send message" borderRadius="50%" />

            <ThreeDotsButton aria-label="More" borderRadius="50%" />
        </Flex>
    );
};
