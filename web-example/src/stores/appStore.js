import { makeAutoObservable } from 'mobx';
import settings from 'config/settings';

const localeKey = `${settings.localStorageKey}.locale`;

class AppStore {
    constructor() {
        makeAutoObservable(this);
    }

    searchParams = new URLSearchParams(window.location.search);
    loggedInUser = false;
    locale = window.localStorage.getItem(localeKey) || 'zh-CN';
    currentRole = 'guest';

    setLocation = (location) => {
        this.searchParams = new URLSearchParams(location.search);
    };

    setLoggedInUser = (user) => (this.loggedInUser = user);

    setLocale = (locale) => {
        this.locale = locale;
        window.localStorage.setItem(localeKey, locale);
    };

    setCurrentRole = (role) => {
        if (this.loggedInUser.roles.includes(role)) {
            this.currentRole = role;
        }
    };
}

const appStore = new AppStore();

export default appStore;
