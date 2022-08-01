import React, { FC, forwardRef } from 'react';
import { Icon, IconButton, IconButtonProps } from '@chakra-ui/react';
import { ChatIcon } from '@chakra-ui/icons';

export interface MessageIconButtonProps extends IconButtonProps {}

export const MessageIconButton = forwardRef<HTMLButtonElement, MessageIconButtonProps>(
    (props, ref) => {
        return (
            <IconButton ref={ref} {...props}>
                <Icon>
                    <ChatIcon />
                </Icon>
            </IconButton>
        );
    },
);
