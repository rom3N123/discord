import * as trpcNext from '@trpc/server/adapters/next';
import { authRouter } from '~/server/routers/auth';
import { createRouter, createContext } from '~/server/context';
import { usersRouter } from '~/server/routers/users';

export const appRouter = createRouter().merge('auth.', authRouter).merge('users.', usersRouter);

export type AppRouter = typeof appRouter;

export default trpcNext.createNextApiHandler({
    router: appRouter,
    createContext,
});
