import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { DiscordLogoButton } from '~/components/buttons/DiscordLogoButton';

export const DiscordLogoNavigationButton = () => {
    const { route, push } = useRouter();

    const isOnMainPage = route.split('/')[1] === 'me';

    return (
        <Link href="/me">
            <DiscordLogoButton isActive={isOnMainPage} label="Главная" aria-label="Main page" />
        </Link>
    );
};
