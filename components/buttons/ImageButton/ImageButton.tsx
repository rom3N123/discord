import { CSSObject, IconButton, IconButtonProps, Tooltip } from '@chakra-ui/react';
import React, { FC, forwardRef, ReactElement } from 'react';
import { px } from '~/helpers';

export interface ImageButtonProps extends IconButtonProps {
    isWithTransition?: boolean;
    isWithHoverBar?: boolean;
}

export const SIZE = 48;

export const baseCss: CSSObject = {
    borderRadius: '50%',
    width: px(SIZE),
    height: px(SIZE),
    transition: 'all .2s ease',
};

export const hoverTransitionCss: CSSObject = { borderRadius: '25%' };

export const ImageButton = forwardRef<HTMLButtonElement, ImageButtonProps>(
    ({ sx, _hover, isWithTransition = true, ...otherProps }, ref) => {
        const hoverCss = {
            ..._hover,
            ...(isWithTransition && hoverTransitionCss),
        };

        return (
            <IconButton ref={ref} _hover={hoverCss} sx={{ ...baseCss, ...sx }} {...otherProps} />
        );
    },
);
