import { hash, compare } from 'bcrypt';

const SALT = 8;

interface HashService {
    hashPassword: (password: string) => Promise<string>;
    comparePasswords: (hashedPassword: string, plainTextPassword: string) => Promise<boolean>;
}

export const hashService: HashService = {
    async hashPassword(password) {
        const hashedPassword = await hash(password, SALT);

        return hashedPassword;
    },
    async comparePasswords(hashedPassword, plainTextPassword) {
        const areEqual = await compare(plainTextPassword, hashedPassword);

        return areEqual;
    },
};
