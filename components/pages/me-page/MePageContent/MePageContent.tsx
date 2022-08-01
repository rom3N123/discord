import React, { FC } from 'react';
import { OnlineFriends } from './components/OnlineFriends';
import { AllFriends } from './components/AllFriends';
import { PendingRequests } from './components/PendingRequests';
import { AddFriend } from './components/AddFriend';
import { useRouter } from 'next/router';
import { ME_CONTENT_IDS } from '../MePage/MePage';
import { Box } from '@chakra-ui/react';

const getContentByContentId = (contentId: ME_CONTENT_IDS): FC<any> => {
    switch (contentId) {
        case ME_CONTENT_IDS.ALL:
            return AllFriends;
        case ME_CONTENT_IDS.PENDING:
            return PendingRequests;
        case ME_CONTENT_IDS.ADD:
            return AddFriend;
        default:
            return OnlineFriends;
    }
};

export const MePageContent: FC = () => {
    const {
        query: { contentId },
    } = useRouter();

    const Content = getContentByContentId(contentId as ME_CONTENT_IDS);

    return (
        <Box padding="16px 30px">
            <Content />
        </Box>
    );
};
