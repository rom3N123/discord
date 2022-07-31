import { Flex } from '@chakra-ui/react';
import React, { FC } from 'react';
import { ReactContentSlot } from '~/types/react';

export interface ListItemProps {
    start?: ReactContentSlot;
    center?: ReactContentSlot;
    end?: ReactContentSlot;
}

export const ListItem: FC<ListItemProps> = ({ start, center, end }) => {
    return (
        <Flex p="5px 8px" align="center" h="42px">
            <Flex width="100%" gap="12px" align="center">
                {start}

                {center}

                {end}
            </Flex>
        </Flex>
    );
};
