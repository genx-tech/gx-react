import { makeAutoObservable } from 'mobx';
import { Runtime } from '@genx/react';

import httpClient from 'helpers/httpClient';
import settings from 'config/settings';

const rolesToSet = (roles) => (Array.isArray(roles) ? new Set(roles) : roles);

const localeKey = `${settings.localStorageKey}.locale`;
const authKey = `${settings.localStorageKey}.auth`;

const cachedLocale = window.localStorage.getItem(localeKey) || 'zh-CN';
const cachedAuthRaw = window.localStorage.getItem(authKey);

class AppStore {
    constructor() {
        makeAutoObservable(this);

        httpClient.onReponseError = (error) => {
            Runtime.log('error', () => error);
            throw error;
        };

        if (cachedAuthRaw) {
            try {
                const auth = JSON.parse(cachedAuthRaw);

                console.log(auth);

                if (auth && auth.token) {
                    this.onLoggedIn(auth);
                }
            } catch (error) {
                console.log(error.message);
            }
        }
    }

    searchParams = new URLSearchParams(window.location.search);
    locale = cachedLocale;

    //will be reset in onLoggedIn
    loggedInUser = false;
    authToken = false;
    currentRole = 'GUEST';

    setLocation = (location) => {
        this.searchParams = new URLSearchParams(location.search);
    };

    setLoggedInUser = (user) => (this.loggedInUser = user);

    setLocale = (locale) => {
        this.locale = locale;
        window.localStorage.setItem(localeKey, locale);
    };

    onLoggedIn = (auth) => {
        httpClient.onSending = (req) => {
            req.set('Authorization', `Bearer ${auth.token}`);
        };

        const roles = rolesToSet(auth.user.roles);

        this.loggedInUser = { ...auth.user, roles };

        this.currentRole = ['BUSI_ADMIN', 'BUSI_AUDIT'].find((role) =>
            roles.has(role)
        )
            ? 'BUSINESS'
            : 'FACTORY';
        window.localStorage.setItem(authKey, JSON.stringify(auth));
    };

    logout = (notRedirect) => {
        delete httpClient.onSending;
        window.localStorage.removeItem(authKey);
        Runtime.log('verbose', () => `Logged out.`);

        if (!notRedirect) {
            window.location.replace(settings.landingPath);
        }
    };
}

const appStore = new AppStore();

export default appStore;
