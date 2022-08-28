import { makeAutoObservable } from 'mobx';

export const rtcStore = new (class {
    public isMicEnabled = true;
    public isHeadphonesEnabled = true;

    constructor() {
        makeAutoObservable(this);
    }

    setIsMicEnabled(isEnabled: boolean) {
        this.isMicEnabled = isEnabled;
    }
    toggleIsMicEnabled() {
        this.isMicEnabled = !this.isMicEnabled;
    }

    setIsHeadphonesEnabled(isEnabled: boolean) {
        this.isHeadphonesEnabled = isEnabled;
    }
    toggleIsHeadphonesEnabled() {
        this.isHeadphonesEnabled = !this.isHeadphonesEnabled;
    }
})();
