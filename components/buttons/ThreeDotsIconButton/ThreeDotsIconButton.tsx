import React, { forwardRef } from 'react';
import { Icon, IconButton, IconButtonProps } from '@chakra-ui/react';
import { ReactComponent as ThreeDotsIcon } from '~icons/three-dots.svg';

export interface ThreeDotsIconButtonProps extends IconButtonProps {}

export const ThreeDotsIconButton = forwardRef<HTMLButtonElement, ThreeDotsIconButtonProps>(
    (props, ref) => {
        return (
            <IconButton ref={ref} {...props}>
                <Icon w="16px" h="16px">
                    <ThreeDotsIcon />
                </Icon>
            </IconButton>
        );
    },
);
