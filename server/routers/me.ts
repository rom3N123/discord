import * as trpc from '@trpc/server';
import { z } from 'zod';

export const meRouter = trpc.router().query('hello', {
    input: z.object({
        name: z.string(),
    }),
    resolve() {
        return {
            me: true,
        };
    },
});
