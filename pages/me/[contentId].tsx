import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import React from 'react';
import { MePage, ME_CONTENT_IDS } from '~/components/pages/me-page/MePage';

const Page = () => {
    return <MePage />;
};

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            {
                params: {
                    contentId: ME_CONTENT_IDS.ADD,
                },
            },
            {
                params: {
                    contentId: ME_CONTENT_IDS.ALL,
                },
            },
            {
                params: {
                    contentId: ME_CONTENT_IDS.PENDING,
                },
            },
        ],
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = (context: GetStaticPropsContext) => {
    return {
        props: {},
    };
};

export default Page;
