import { TRPCError } from '@trpc/server';
import { prisma } from '../db';
import { hashService } from '../services/hash.service';
import { loginByCredentialsSchema, registerSchema } from '../schemas/auth';
import { jwtService } from '../services/jwt.service';
import { createRouter } from '../context';
import { z } from 'zod';

export const authRouter = createRouter()
    .mutation('register', {
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

                const token = jwtService.sign({
                    id: createdUser.id,
                });

                return { user: createdUser, token };
            }

            throw new TRPCError({
                code: 'BAD_REQUEST',
                message: 'Пользователь с таким адресом уже зарегистрирован',
            });
        },
    })
    .mutation('loginByCredentials', {
        input: loginByCredentialsSchema,
        async resolve({ input: { email, password } }) {
            const user = await prisma.user.findFirst({
                where: {
                    email,
                },
            });

            const throwError = () => {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: 'Неправильный Email или пароль',
                });
            };

            if (!user) {
                throwError();
            }

            const arePasswordsEqual = await hashService.comparePasswords(user!.password, password);

            if (!arePasswordsEqual) {
                throwError();
            }

            return { user };
        },
    })
    .mutation('loginByAccessToken', {
        input: z.string(),
        async resolve({ input }) {
            try {
                const { id } = jwtService.verify(input);

                const user = await prisma.user.findFirst({
                    where: {
                        id,
                    },
                });

                return { user };
            } catch (error) {
                throw new TRPCError({ code: 'UNAUTHORIZED', message: 'Невалидный токен' });
            }
        },
    });
