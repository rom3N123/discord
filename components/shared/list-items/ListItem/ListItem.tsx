import { Button, ButtonProps, Flex, FlexProps, HTMLChakraProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import { ReactContentSlot } from '~/types/react';

export interface ListItemProps {
    start?: ReactContentSlot;
    center?: ReactContentSlot;
    end?: ReactContentSlot;
    isButton?: boolean;
    flexProps?: FlexProps;
    buttonProps?: ButtonProps;
}

export const ListItem: FC<ListItemProps> = ({
    start,
    center,
    end,
    isButton = false,
    flexProps,
    buttonProps,
}) => {
    const Container = isButton ? Button : Flex;

    return (
        <Container p="5px 8px" align="center" h="42px" {...(isButton ? buttonProps : flexProps)}>
            <Flex width="100%" gap="12px" align="center">
                {start}

                {center}

                {end}
            </Flex>
        </Container>
    );
};
