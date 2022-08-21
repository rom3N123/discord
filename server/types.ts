import { InferMutationOutput } from './helpers/types';

export type User = InferMutationOutput<'auth.register'>['user'];
