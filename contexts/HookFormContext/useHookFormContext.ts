import { useContext } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { Context } from './HookFormContext';
import { ZodType, z } from 'zod';

export const useHookFormContext = <S extends ZodType<any, any, any>>() => {
    return useContext<UseFormReturn<z.infer<S>>>(Context);
};
