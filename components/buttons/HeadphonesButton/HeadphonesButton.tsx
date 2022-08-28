import React, { forwardRef } from 'react';
import { Icon, IconButton, IconButtonProps } from '@chakra-ui/react';
import { ReactComponent as HeadphonesOnSvg } from '~icons/headphones-on.svg';
import { ReactComponent as HeadphonesOffSvg } from '~icons/headphones-off.svg';

const getIcon = (isEnabled: boolean) => {
    if (isEnabled) {
        return HeadphonesOnSvg;
    }

    return HeadphonesOffSvg;
};

export interface HeadphonesButtonProps extends IconButtonProps {
    isEnabled?: boolean;
}

export const HeadphonesButton = forwardRef<HTMLButtonElement, HeadphonesButtonProps>(
    ({ isEnabled = true, ...otherProps }, ref) => {
        const HeadphonesIcon = getIcon(isEnabled);

        return (
            <IconButton ref={ref} size="sm" {...otherProps}>
                <Icon w="20px" h="20px">
                    <HeadphonesIcon />
                </Icon>
            </IconButton>
        );
    },
);
