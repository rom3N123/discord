import React from 'react';
import { FormControl, FormErrorMessage, FormLabel, Input, InputProps } from '@chakra-ui/react';
import { useHookFormContext } from '~/contexts/HookFormContext/useHookFormContext';
import { Path } from 'react-hook-form';
import { z, ZodType } from 'zod';

export interface HookFormInputProps<S extends ZodType<any, any, any>>
    extends Omit<InputProps, 'name'> {
    name: keyof z.infer<S>;
    label: string;
}

export function HookFormInput<S extends ZodType<any, any, any>>({
    name,
    label,
    ...otherProps
}: HookFormInputProps<S>) {
    const {
        register,
        formState: { errors },
    } = useHookFormContext<S>();

    const error = errors[name];
    const hasError = Boolean(error);

    return (
        <FormControl>
            <FormLabel textTransform="uppercase" fontSize="13px">
                {label}
            </FormLabel>

            <Input {...register(name as Path<z.infer<S>>)} {...otherProps} />

            {hasError && <FormErrorMessage>{error?.message?.toString()}</FormErrorMessage>}
        </FormControl>
    );
}
