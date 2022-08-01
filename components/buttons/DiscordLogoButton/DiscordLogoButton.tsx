import React, { FC, forwardRef } from 'react';
import { ReactComponent as Logo } from '~icons/logo.svg';
import { SidebarButton, SidebarButtonProps } from '../SidebarButton';

export const DiscordLogoButton = forwardRef<HTMLButtonElement, SidebarButtonProps>((props, ref) => {
    return <SidebarButton ref={ref} icon={<Logo />} {...props} />;
});
