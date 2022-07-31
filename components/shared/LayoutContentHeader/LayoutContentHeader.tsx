import { Flex, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { ReactContentSlot } from '~/types/react';
import { LayoutItemHeader } from '../LayoutItemHeader';

export interface LayoutContentHeaderProps {
    label: string;
    labelIcon?: ReactContentSlot;
    children?: ReactContentSlot;
}

export const LayoutContentHeader: FC<LayoutContentHeaderProps> = ({
    label,
    labelIcon,
    children,
}) => {
    return (
        <LayoutItemHeader alignItems="center" p="13px 17px">
            <Flex align="center" justify="space-between">
                <Flex align="center" gap="9px">
                    {labelIcon}
                    <Text fontSize="16px" fontWeight={700}>
                        {label}
                    </Text>
                </Flex>

                {children}
            </Flex>
        </LayoutItemHeader>
    );
};
