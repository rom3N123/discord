import React from 'react';
import { IndexPageSidebar } from '~/components/pages/index-page/IndexPageSidebar';
import Layout from '~/components/shared/Layout';

const Index = () => {
    return <Layout sidebar={<IndexPageSidebar />} content={<div>Content</div>} />;
};

export default Index;
