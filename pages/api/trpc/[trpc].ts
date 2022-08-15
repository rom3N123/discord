import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { meRouter } from '~/server/routers/me';

export const appRouter = trpc.router().merge('me.', meRouter);

export type AppRouter = typeof appRouter;

export default trpcNext.createNextApiHandler({
    router: appRouter,
    createContext: () => null,
});
