import { UseFormHandleSubmit } from 'react-hook-form';
import { ZodType } from 'zod';

export type HookFormOnSubmit<H extends UseFormHandleSubmit<ZodType<any, any, any>>> = H extends (
    callback: infer C,
) => any
    ? C
    : never;
