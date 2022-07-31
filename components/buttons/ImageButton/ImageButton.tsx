import {
  CSSObject,
  IconButton,
  IconButtonProps,
  Tooltip,
} from '@chakra-ui/react'
import React, { FC, forwardRef, ReactElement } from 'react'

export interface ImageButtonProps extends IconButtonProps {
  isWithTransition?: boolean
  isWithHoverBar?: boolean
}

export const SIZE = 48

export const baseCss: CSSObject = {
  borderRadius: '50%',
  width: `${SIZE}px`,
  height: `${SIZE}px`,
  transition: 'all .2s ease',
}

export const hoverTransitionCss: CSSObject = { borderRadius: '25%' }

export const getCss = (
  params: Pick<ImageButtonProps, 'isWithTransition'>
): CSSObject => {
  const { isWithTransition } = params

  return {
    ...baseCss,
  }
}

export const ImageButton = forwardRef<HTMLButtonElement, ImageButtonProps>(
  ({ sx, _hover, isWithTransition = true, ...otherProps }, ref) => {
    const css = getCss({ isWithTransition })
    const hoverCss = {
      ..._hover,
      ...(isWithTransition && hoverTransitionCss),
    }

    return (
      <IconButton
        ref={ref}
        _hover={hoverCss}
        sx={{ ...css, ...sx }}
        {...otherProps}
      />
    )
  }
)
