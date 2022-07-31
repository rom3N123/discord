import { Dispatch, ReactElement, SetStateAction } from 'react';

export type ReactSetState<T> = Dispatch<SetStateAction<T>>;

export type ReactContentSlot<T = any> = ReactElement<T>;
