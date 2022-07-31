import { Flex, Text, Tooltip } from '@chakra-ui/react';
import React, { FC } from 'react';
import { UserListItem, UserListItemProps } from '../UserListItem';

export interface UserInfoListItemProps extends Omit<UserListItemProps, 'center'> {
    topText: string;
    bottomText?: string;
}

export const UserInfoListItem: FC<UserInfoListItemProps> = ({
    topText,
    bottomText,
    ...otherProps
}) => {
    const center = (
        <Flex width="100%" overflow="hidden" whiteSpace="nowrap" direction="column">
            <Tooltip hasArrow label={topText}>
                <Text
                    overflow="hidden"
                    textOverflow="ellipsis"
                    lineHeight="3"
                    fontSize="16px"
                    fontWeight="500">
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
    );

    return <UserListItem center={center} {...otherProps} />;
};
