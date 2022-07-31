import React from 'react';
import { Button, Flex } from '@chakra-ui/react';
import { BUTTON_HEIGHT, BUTTON_VARIANT } from '../../Header';

export const NavigationButtons = () => {
    return (
        <Flex gap="10px">
            <Button variant={BUTTON_VARIANT} h={BUTTON_HEIGHT}>
                В сети
            </Button>

            <Button variant={BUTTON_VARIANT} h={BUTTON_HEIGHT}>
                Все
            </Button>

            <Button variant={BUTTON_VARIANT} h={BUTTON_HEIGHT}>
                Ожидание
            </Button>

            <Button variant={BUTTON_VARIANT} h={BUTTON_HEIGHT} colorScheme="green">
                Добавить в друзья
            </Button>
        </Flex>
    );
};
