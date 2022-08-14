import { withTRPC as trpcHoc } from '@trpc/next';
import superjson from 'superjson';
import { AppRouter } from '~/pages/api/trpc/[trpc]';
import { isOnClientSide } from '~/utils';

const getBaseUrl = () => {
    if (process.env.VERCEL_URL) {
        return `https://${process.env.VERCEL_URL}`;
    }

    return `http://localhost:${process.env.PORT ?? 3000}/api/trpc`;
};

const withTRPC = trpcHoc<AppRouter>({
    config({ ctx }) {
        const url = getBaseUrl();

        if (isOnClientSide()) {
            return {
                url: '/api/trpc',
            };
        }

        return {
            transformer: superjson,
            url: getBaseUrl(),
        };
    },
    ssr: true,
});

export default withTRPC;
