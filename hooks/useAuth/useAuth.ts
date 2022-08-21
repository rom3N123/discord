import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { trpc } from '~/utils/trpc';
import { userStore } from '~/store/user.store';

export const useAuth = () => {
    const { push } = useRouter();
    const { isLoading, mutate } = trpc.useMutation(['auth.loginByAccessToken'], {
        onSuccess({ user }) {
            userStore.setUser(user);
        },
    });

    useEffect(() => {
        const token = localStorage.getItem('accessToken');

        if (token) {
            mutate(token);
        } else {
            push('/auth/login');
        }
    }, []);

    useEffect(() => {
        if (userStore.isAuthorized) {
            push('/me');
        }
    }, [userStore.isAuthorized]);

    return { isLoading };
};
