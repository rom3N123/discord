import { makeAutoObservable } from 'mobx';
import { User } from '~/server/types';

export const userStore = new (class {
    public user: User | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    setUser(user: User | null) {
        this.user = user;
    }

    get isAuthorized() {
        return Boolean(this.user);
    }
})();
