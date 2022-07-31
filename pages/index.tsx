import type { NextPage } from 'next';
import Layout from '~/components/shared/Layout';
import { PageSidebar } from '~/components/shared/PageSidebar';

const Home: NextPage = () => {
    return <Layout sidebar={<PageSidebar></PageSidebar>} content={<div>Content</div>} />;
};

export default Home;
