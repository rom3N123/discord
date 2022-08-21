import { createRouter } from '../context';
import { prisma } from '../db';

export const usersRouter = createRouter().query('getAll', {
    async resolve() {
        const allUsers = await prisma.user.findMany();

        return allUsers;
    },
});
