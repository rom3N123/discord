import { z } from 'zod';

export const registerSchema = z.object({
    email: z.string().email('Неправильный Email'),
    name: z.string().min(3, { message: 'Ник должен состоять минимум из 3 символов' }),
    password: z.string().min(8, { message: 'Пароль должен состоять минимум из 8 символов' }),
});
export type RegisterSchema = typeof registerSchema;

export const loginByCredentialsSchema = z.object({
    email: z.string().email('Неправильный Email'),
    password: z.string(),
});
export type LoginByCredentialsSchema = typeof loginByCredentialsSchema;
