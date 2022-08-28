import React from 'react';
import { Avatar, Flex, Text } from '@chakra-ui/react';
import { RtcMicButton } from '~/components/rtc/RtcMicButton';
import { RtcHeadphonesButton } from '~/components/rtc/RtcHeadphonesButton';
import { observer } from 'mobx-react-lite';
import { userStore } from '~/store/user.store';

export const UserControl = observer(() => {
    const { name, bio } = userStore.user || {};

    return (
        <Flex justify="space-between" align="center" p="13px 8px" display="flex" h="52px">
            <Flex align="center" gap="12px">
                <Avatar h="32px" w="32px" />

                <Flex direction="column">
                    <Text fontWeight="700" lineHeight="14px" fontSize="14px">
                        {name}
                    </Text>

                    {bio && (
                        <Text fontSize="12px" color="gray.200">
                            {bio}
                        </Text>
                    )}
                </Flex>
            </Flex>
            <Flex gap="6px">
                <RtcMicButton />

                <RtcHeadphonesButton />
            </Flex>
        </Flex>
    );
});
