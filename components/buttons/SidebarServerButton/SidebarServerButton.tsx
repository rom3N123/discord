import { CSSObject } from '@chakra-ui/react';
import React, { FC, forwardRef } from 'react';
import { SidebarButton, SidebarButtonProps } from '../SidebarButton';

export interface SidebarServerButtonProps extends SidebarButtonProps {
    image: string;
}

export const SidebarServerButton = forwardRef<HTMLButtonElement, SidebarServerButtonProps>(
    ({ sx, image, ...otherProps }, ref) => {
        const resultSx: CSSObject = {
            backgroundImage: `url(${image}) !important`,
            backgroundSize: 'cover !important',
            backgroundRepeat: 'no-repeat !important',
            ...sx,
        };

        return <SidebarButton ref={ref} sx={resultSx} {...otherProps} />;
    },
);
