import { Tooltip, CSSObject } from '@chakra-ui/react';
import React, { FC, ReactElement } from 'react';
import { serversSidebarBoxProps } from '~/components/shared/ServersSidebar/ServersSidebar';
import { useHover } from '~/hooks/useHover';
import { ImageButtonWithBar, ImageButtonWithBarProps } from '../ImageButtonWithBar';
import { BarProps } from '../ImageButtonWithBar/components/Bar';

export interface SidebarButtonProps extends ImageButtonWithBarProps {
    label: string;
}

export const SidebarButton: FC<SidebarButtonProps> = ({
    isActive,
    sx,
    barProps,
    label,
    ...otherProps
}): ReactElement => {
    const { isHovered, onMouseEnter, onMouseLeave } = useHover();

    const { centerProps, ...otherBarProps } = barProps || {};

    const resultBarProps: BarProps = {
        centerProps: {
            left: `-${serversSidebarBoxProps.padding}`,
            ...centerProps,
        },
        hideBar: !isActive && !isHovered,
        isSmallDot: !isActive,
        ...otherBarProps,
    };

    return (
        <Tooltip hasArrow label={label}>
            <ImageButtonWithBar
                barProps={resultBarProps}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                sx={sx}
                {...otherProps}
            />
        </Tooltip>
    );
};
