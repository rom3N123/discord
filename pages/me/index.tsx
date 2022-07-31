import React from 'react';
import { MePageSidebar } from '~/components/pages/me-page/MePageSidebar';
import Layout from '~/components/shared/Layout';

const Index = () => {
    return <Layout sidebar={<MePageSidebar />} content={<div>Content</div>} />;
};

export default Index;
