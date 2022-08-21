import * as trpc from '@trpc/server';
import { TRPCError } from '@trpc/server';
import { prisma } from '../db';
import { hashService } from '../services/hash.service';
import { registerSchema } from '../schemas/auth';

export const meRouter = trpc.router().mutation('register', {
    input: registerSchema,
    async resolve({ input: { email, password, name } }) {
        const isUserExist = await prisma.user.findFirst({
            where: {
                email,
            },
        });

        if (!isUserExist) {
            const hashedPassword = await hashService.hashPassword(password);

            const createdUser = await prisma.user.create({
                data: {
                    email,
                    password: hashedPassword,
                    name,
                },
            });

            return createdUser;
        }

        throw new TRPCError({
            code: 'BAD_REQUEST',
            message: 'Пользователь с таким адресом уже зарегистрирован',
        });
    },
});
