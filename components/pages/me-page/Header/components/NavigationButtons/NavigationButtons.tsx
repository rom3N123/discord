import React from 'react';
import { Button, Flex } from '@chakra-ui/react';
import { BUTTON_HEIGHT, BUTTON_VARIANT } from '../../Header';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ME_HREFS, ME_CONTENT_IDS } from '../../../MePage';

export const NavigationButtons = () => {
    const {
        query: { contentId },
    } = useRouter();

    return (
        <Flex gap="10px">
            <Link href={ME_HREFS.INDEX}>
                <Button isActive={!contentId} variant={BUTTON_VARIANT} h={BUTTON_HEIGHT}>
                    В сети
                </Button>
            </Link>

            <Link href={ME_HREFS.ALL}>
                <Button
                    isActive={ME_CONTENT_IDS.ALL === contentId}
                    variant={BUTTON_VARIANT}
                    h={BUTTON_HEIGHT}>
                    Все
                </Button>
            </Link>

            <Link href={ME_HREFS.PENDING}>
                <Button
                    isActive={ME_CONTENT_IDS.PENDING === contentId}
                    variant={BUTTON_VARIANT}
                    h={BUTTON_HEIGHT}>
                    Ожидание
                </Button>
            </Link>

            <Link href={ME_HREFS.ADD}>
                <Button
                    isActive={ME_CONTENT_IDS.ADD === contentId}
                    variant={BUTTON_VARIANT}
                    h={BUTTON_HEIGHT}
                    colorScheme="green">
                    Добавить в друзья
                </Button>
            </Link>
        </Flex>
    );
};
