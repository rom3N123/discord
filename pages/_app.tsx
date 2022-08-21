import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme/theme';
import withTRPC from '~/hocs/withTRPC';
import { useAuth } from '~/hooks/useAuth';
import { observer } from 'mobx-react-lite';

function MyApp({ Component, pageProps }: AppProps) {
    const { isLoading } = useAuth();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default withTRPC(observer(MyApp));
