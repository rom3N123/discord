import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { IndexPageSidebar } from '~/components/pages/index-page/IndexPageSidebar';
import Layout from '~/components/shared/Layout';

const Home: NextPage = () => {
    const { push } = useRouter();

    useEffect(() => {
        push('/me');
    }, []);

    return <div>Index page</div>;
};

export default Home;
