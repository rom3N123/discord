import { CreateNextContextOptions } from '@trpc/server/adapters/next';
import { jwtService } from '~/server/services/jwt.service';
import { prisma } from '~/server/db';
import * as trpc from '@trpc/server';

export const createContext = async ({ req }: CreateNextContextOptions) => {
    const bearerToken = req.headers.authorization || '';
    const token = bearerToken.split(' ')[1];

    if (token) {
        try {
            const tokenValue = token.split(' ')[1];

            const { id } = jwtService.verify(tokenValue);

            const user = await prisma.user.findFirst({
                where: {
                    id,
                },
            });

            return { user, token: tokenValue };
        } catch (error) {
            return null;
        }
    }

    return { token };
};

export type Context = trpc.inferAsyncReturnType<typeof createContext>;

export const createRouter = () => {
    return trpc.router<Context>();
};
