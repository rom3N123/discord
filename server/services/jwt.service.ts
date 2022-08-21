import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
config();
export type JwtSignPayload = {
    id: number;
};

const SIGNATURE = process.env.JWT_SIGNATURE as string;

export const jwtService = {
    sign(payload: JwtSignPayload) {
        return jwt.sign(payload, SIGNATURE);
    },
    verify(token: string) {
        return jwt.verify(token, SIGNATURE) as JwtSignPayload;
    },
};
