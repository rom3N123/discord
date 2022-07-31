import React, { FC } from 'react';
import Logo from '~icons/logo.svg';
import { SidebarButton, SidebarButtonProps } from '../SidebarButton';

export const DiscordLogoButton: FC<SidebarButtonProps> = (props) => {
    return <SidebarButton icon={<Logo />} {...props} />;
};
