import React from 'react';
import { MePageContent } from '~/components/pages/me-page/MePageContent';
import { MePageSidebar } from '~/components/pages/me-page/MePageSidebar';
import Layout from '~/components/shared/Layout';

const Index = () => {
    return <Layout sidebar={<MePageSidebar />} content={<MePageContent />} />;
};

export default Index;
