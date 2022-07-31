import React, { FC } from 'react'
import { Box, BoxProps, Center, CenterProps, Fade } from '@chakra-ui/react'

export interface BarProps extends BoxProps {
  isSmallDot?: boolean
  centerProps?: CenterProps
  hideBar?: boolean
}

const RADIUS = 3

export const Bar: FC<BarProps> = ({
  isSmallDot,
  centerProps,
  hideBar,
  ...otherProps
}) => {
  const height = isSmallDot ? '12px' : '100%'

  return (
    <Fade in={!hideBar}>
      <Center height="100%" {...centerProps}>
        <Box
          transition="all .2s ease"
          borderTopRightRadius={`${RADIUS}px`}
          borderBottomRadius={`${RADIUS}px`}
          width="4px"
          bg="#fff"
          height={height}
          {...otherProps}
        />
      </Center>
    </Fade>
  )
}
