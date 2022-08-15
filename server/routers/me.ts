import * as trpc from '@trpc/server';
import { z } from 'zod';

export const meRouter = trpc.router().query('hello', {
    resolve() {
        return {
            me: true,
        };
    },
});
