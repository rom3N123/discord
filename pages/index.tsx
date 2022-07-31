import type { NextPage } from 'next';
import { IndexPageSidebar } from '~/components/pages/index-page/IndexPageSidebar';
import Layout from '~/components/shared/Layout';

const Home: NextPage = () => {
    return <Layout sidebar={<IndexPageSidebar />} content={<div>Content</div>} />;
};

export default Home;
