import { TRPCError } from '@trpc/server';
import { createRouter } from '../context';

export const createProtectedRouter = () => {
    return createRouter().middleware(({ ctx, next }) => {
        if (!ctx?.user) {
            throw new TRPCError({ code: 'UNAUTHORIZED', message: 'Не авторизован' });
        }

        return next({
            ctx: {
                ...ctx,
                user: ctx.user,
            },
        });
    });
};
