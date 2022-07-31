import React, { FC, forwardRef, ReactElement } from 'react'
import { ImageButton, ImageButtonProps } from '../ImageButton/ImageButton'
import Logo from '~icons/logo.svg'

export const DiscordLogoButton = forwardRef<
  HTMLButtonElement,
  ImageButtonProps
>((props, ref) => {
  return <ImageButton ref={ref} icon={<Logo />} {...props} />
})
