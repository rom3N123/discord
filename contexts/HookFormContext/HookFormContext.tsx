import { zodResolver } from '@hookform/resolvers/zod';
import React, { createContext, ReactNode } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';
import { ZodType, z } from 'zod';

export interface HookFormContext<I> extends UseFormReturn<I> {}

export const Context = createContext<T>({} as UseFormReturn<T>);

interface HookFormContextProviderProps {
    children: ReactNode;
    schema: ZodType<any, any, any>;
}

export const HookFormContextProvider = ({ children, schema }: HookFormContextProviderProps) => {
    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
    });

    return <Context.Provider value={form}>{children}</Context.Provider>;
};
