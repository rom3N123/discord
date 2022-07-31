import { Divider, Flex, IconButton, Tooltip } from '@chakra-ui/react';
import React from 'react';
import { StartNewDialogButton } from '~/components/buttons/StartNewDialogButton';
import { QuestionIcon } from '@chakra-ui/icons';
import { ICON_HEIGHT, BUTTON_VARIANT, BUTTON_HEIGHT } from '../../Header';

export const ActionButtons = () => {
    return (
        <Flex align="center" gap="10px">
            <Tooltip hasArrow label="Новый групповой чат">
                <StartNewDialogButton
                    aria-label="Start new dialog"
                    variant={BUTTON_VARIANT}
                    height={BUTTON_HEIGHT}
                />
            </Tooltip>

            <Divider orientation="vertical" />

            <Tooltip hasArrow label="Связь">
                <IconButton aria-label="Связь" variant={BUTTON_VARIANT} height={BUTTON_HEIGHT}>
                    <QuestionIcon w={ICON_HEIGHT} h={ICON_HEIGHT} />
                </IconButton>
            </Tooltip>
        </Flex>
    );
};
