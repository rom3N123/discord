import { CSSObject } from '@chakra-ui/react';
import React, { FC } from 'react';
import { SidebarButton, SidebarButtonProps } from '../SidebarButton';

// backgroundImage: `url(${image}) !important`,
// backgroundSize: 'cover !important',
// backgroundRepeat: 'no-repeat !important',

export interface SidebarServerButtonProps extends SidebarButtonProps {
    image: string;
}

export const SidebarServerButton: FC<SidebarServerButtonProps> = ({ sx, image, ...otherProps }) => {
    const resultSx: CSSObject = {
        backgroundImage: `url(${image}) !important`,
        backgroundSize: 'cover !important',
        backgroundRepeat: 'no-repeat !important',
        ...sx,
    };

    return <SidebarButton sx={resultSx} {...otherProps} />;
};
