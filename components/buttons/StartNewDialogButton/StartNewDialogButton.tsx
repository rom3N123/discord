import React, { forwardRef } from 'react';
import { Icon, IconButton, IconButtonProps } from '@chakra-ui/react';
import { ReactComponent as StartNewDialogIcon } from '~icons/start-new-dialog.svg';

export const StartNewDialogButton = forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
    return (
        <IconButton
            ref={ref}
            icon={
                <Icon w="22px" h="22px">
                    <StartNewDialogIcon />
                </Icon>
            }
            {...props}
        />
    );
});
