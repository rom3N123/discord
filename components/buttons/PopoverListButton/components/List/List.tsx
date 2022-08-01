import React, { FC } from 'react';
import {
    Button,
    ButtonProps,
    List as ChakraList,
    ListItem,
    ListProps as ChakraListProps,
} from '@chakra-ui/react';

export interface ListItem extends ButtonProps {
    label: string;
}

export interface ListProps {
    items: ListItem[];
}

export const List: FC<ListProps> = ({ items }) => {
    const onListClick: ChakraListProps['onClick'] = (event) => {
        event.stopPropagation();
    };

    return (
        <ChakraList
            onClick={onListClick}
            p="6px 8px"
            bg="blackAlpha.500"
            borderRadius="6px"
            display="flex"
            flexDirection="column">
            {items.map(({ label, ...otherProps }, index) => {
                return (
                    <ListItem key={index}>
                        <Button
                            fontWeight="400"
                            fontSize="14px"
                            w="100%"
                            justifyContent="start"
                            height="32px"
                            variant="ghost"
                            {...otherProps}>
                            {label}
                        </Button>
                    </ListItem>
                );
            })}
        </ChakraList>
    );
};
