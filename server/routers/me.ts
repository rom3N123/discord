import * as trpc from '@trpc/server';
import { prisma } from '../db';

export const meRouter = trpc
    .router()
    .query('hello', {
        resolve() {
            return {
                me: true,
            };
        },
    })
    .mutation('add', {
        async resolve() {
            const user = prisma.user.create({
                data: {
                    email: 'kseexy@mail.ru',
                    name: 'Roman',
                },
            });

            return user;
        },
    });
