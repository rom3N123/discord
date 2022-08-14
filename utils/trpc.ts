import { createReactQueryHooks } from '@trpc/react';
import { AppRouter } from '~/pages/api/trpc/[trpc]';

export const trpc = createReactQueryHooks<AppRouter>();
