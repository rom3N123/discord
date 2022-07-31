import { Box, CenterProps } from '@chakra-ui/react'
import React, { forwardRef, useState } from 'react'
import { ImageButton, ImageButtonProps } from '../ImageButton'
import { Bar, BarProps } from './components/Bar'

export interface ImageButtonWithBarProps extends ImageButtonProps {
  isBarActive?: boolean
  barProps?: BarProps
}

export const ImageButtonWithBar = forwardRef<
  HTMLButtonElement,
  ImageButtonWithBarProps
>(({ isBarActive, barProps, ...otherProps }, ref) => {
  const { centerProps, ...otherBarProps } = barProps || {}

  const resultBarProps: BarProps = {
    centerProps: {
      position: 'absolute',
      top: '0',
      left: '0',
      ...centerProps,
    },
    ...otherBarProps,
  }

  return (
    <Box position="relative">
      <Bar isSmallDot={isBarActive} {...resultBarProps} />
      <ImageButton ref={ref} {...otherProps} />
    </Box>
  )
})
