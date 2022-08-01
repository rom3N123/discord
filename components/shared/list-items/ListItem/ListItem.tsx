import React, { forwardRef } from 'react';
import {
    Flex,
    ListItem as ChakraListItem,
    ListItemProps as ChakraListItemProps,
} from '@chakra-ui/react';
import { ReactContentSlot } from '~/types/react';

export interface ListItemProps extends ChakraListItemProps {
    start?: ReactContentSlot;
    center?: ReactContentSlot;
    end?: ReactContentSlot;
}

export const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
    ({ start, center, end, ...otherProps }, ref) => {
        return (
            <ChakraListItem
                ref={ref}
                p="5px 8px"
                display="flex"
                alignItems="center"
                h="42px"
                {...otherProps}>
                <Flex width="100%" gap="12px" align="center" justify="space-between">
                    {start}

                    {center}

                    {end}
                </Flex>
            </ChakraListItem>
        );
    },
);
