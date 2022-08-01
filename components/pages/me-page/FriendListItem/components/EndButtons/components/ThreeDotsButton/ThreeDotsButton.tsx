import React, { FC, forwardRef } from 'react';
import { PopoverListButton } from '~/components/buttons/PopoverListButton';
import { ListProps } from '~/components/buttons/PopoverListButton/components/List';
import {
    ThreeDotsIconButton,
    ThreeDotsIconButtonProps,
} from '~/components/buttons/ThreeDotsIconButton';

export interface ThreeDotsButtonProps extends ThreeDotsIconButtonProps {}

export const ThreeDotsButton = forwardRef<HTMLButtonElement, ThreeDotsButtonProps>(
    ({ ...otherProps }, ref) => {
        const listProps: ListProps = {
            items: [
                { label: 'Начать видеозвонок' },
                { label: 'Начать голосовой звонок' },
                {
                    label: 'Удалить из друзей',
                    colorScheme: 'red',
                },
            ],
        };

        return (
            <PopoverListButton
                popoverContentProps={{ width: 'auto' }}
                listProps={listProps}
                button={<ThreeDotsIconButton ref={ref} {...otherProps} />}
            />
        );
    },
);
