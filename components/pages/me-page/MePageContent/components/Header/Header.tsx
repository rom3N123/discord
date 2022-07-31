import React from 'react';
import { Flex } from '@chakra-ui/react';
import { NavigationButtons } from './components/NavigationButtons';
import { ActionButtons } from './components/ActionButtons';

export const BUTTON_HEIGHT = '24px';
export const BUTTON_VARIANT = 'ghost';
export const ICON_HEIGHT = '22px';

export const Header = () => {
    return (
        <Flex
            justify="space-between"
            flexGrow="1"
            marginLeft="16px"
            paddingLeft="16px"
            borderLeft="1px solid"
            borderColor="whiteAlpha.400">
            <NavigationButtons />

            <ActionButtons />
        </Flex>
    );
};
