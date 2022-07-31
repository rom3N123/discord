import { Tooltip, CSSObject } from '@chakra-ui/react'
import React, { FC, ReactElement } from 'react'
import { serversSidebarBoxProps } from '~/components/shared/ServersSidebar/ServersSidebar'
import { useHover } from '~/hooks/useHover'
import {
  ImageButtonWithBar,
  ImageButtonWithBarProps,
} from '../ImageButtonWithBar'
import { BarProps } from '../ImageButtonWithBar/components/Bar'

export interface ServerButtonProps extends ImageButtonWithBarProps {
  image: string
}

export const ServerButton: FC<ServerButtonProps> = ({
  image,
  isActive,
  sx,
  barProps,
  ...otherProps
}): ReactElement => {
  const { isHovered, onMouseEnter, onMouseLeave } = useHover()

  const { centerProps, ...otherBarProps } = barProps || {}

  const resultBarProps: BarProps = {
    centerProps: {
      left: `-${serversSidebarBoxProps.padding}`,
      ...centerProps,
    },
    hideBar: !isActive && !isHovered,
    isSmallDot: !isActive,
    ...otherBarProps,
  }

  const resultSx: CSSObject = {
    backgroundImage: `url(${image}) !important`,
    backgroundSize: 'cover !important',
    backgroundRepeat: 'no-repeat !important',
    ...sx,
  }

  return (
    <Tooltip hasArrow label="Server">
      <ImageButtonWithBar
        barProps={resultBarProps}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        sx={resultSx}
        {...otherProps}
      />
    </Tooltip>
  )
}
