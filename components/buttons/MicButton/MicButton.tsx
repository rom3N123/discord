import React, { forwardRef } from 'react';
import { Icon, IconButton, IconButtonProps } from '@chakra-ui/react';
import { ReactComponent as MicOnSvg } from '~icons/mic-on.svg';
import { ReactComponent as MicOffSvg } from '~icons/mic-off.svg';

const getIcon = (isEnabled: boolean) => {
    if (isEnabled) {
        return MicOnSvg;
    }

    return MicOffSvg;
};

export interface MicButtonProps extends IconButtonProps {
    isEnabled?: boolean;
}

export const MicButton = forwardRef<HTMLButtonElement, MicButtonProps>(
    ({ isEnabled = true, ...otherProps }, ref) => {
        const MicIcon = getIcon(isEnabled);

        return (
            <IconButton ref={ref} size="sm" {...otherProps}>
                <Icon w="20px" h="20px">
                    <MicIcon />
                </Icon>
            </IconButton>
        );
    },
);
