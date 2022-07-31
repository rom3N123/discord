import React from 'react';
import { NextPage } from 'next';
import Layout from '~/components/shared/Layout';

const Channel: NextPage = () => {
    return <Layout sidebar={<div>Sidebar</div>} content={<div>Content</div>} />;
};

export default Channel;
