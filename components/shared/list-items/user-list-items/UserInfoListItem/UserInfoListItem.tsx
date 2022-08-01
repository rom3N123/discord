import React, { FC, forwardRef } from 'react';
import { Avatar, Flex, Text, Tooltip } from '@chakra-ui/react';
import { ListItem, ListItemProps } from '../../ListItem';

export interface UserInfoListItemProps extends Omit<ListItemProps, 'start'> {
    topText: string;
    bottomText?: string;
}

export const UserInfoListItem = forwardRef<HTMLLIElement, UserInfoListItemProps>(
    ({ topText, bottomText, ...otherProps }, ref) => {
        const start = (
            <Flex gap="12px" align="center">
                <Avatar w="32px" h="32px" />

                <Flex
                    width="100%"
                    overflow="hidden"
                    justify="space-between"
                    whiteSpace="nowrap"
                    direction="column">
                    <Tooltip hasArrow label={topText}>
                        <Text
                            overflow="hidden"
                            textOverflow="ellipsis"
                            lineHeight="3"
                            fontSize="16px"
                            fontWeight="700">
                            {topText}
                        </Text>
                    </Tooltip>

                    {bottomText && (
                        <Tooltip hasArrow label={bottomText}>
                            <Text overflow="hidden" textOverflow="ellipsis" fontSize="13px">
                                {bottomText}
                            </Text>
                        </Tooltip>
                    )}
                </Flex>
            </Flex>
        );

        return <ListItem ref={ref} start={start} {...otherProps} />;
    },
);
