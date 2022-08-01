import React, { FC, ReactNode } from 'react';
import {
    Popover,
    PopoverContent,
    PopoverContentProps,
    PopoverTrigger,
    Tooltip,
} from '@chakra-ui/react';
import { List, ListProps } from './components/List';

export interface PopoverListButtonProps {
    button: ReactNode;
    listProps: ListProps;
    popoverContentProps?: PopoverContentProps;
}

export const PopoverListButton: FC<PopoverListButtonProps> = ({
    listProps,
    button,
    popoverContentProps,
}) => {
    return (
        <Popover>
            <PopoverTrigger>{button}</PopoverTrigger>

            <PopoverContent bg="transparent" border="0" {...popoverContentProps}>
                <List {...listProps} />
            </PopoverContent>
        </Popover>
    );
};
