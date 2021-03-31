import { makeAutoObservable } from 'mobx';
import { Runtime } from '@genx/react';

import httpClient from 'helpers/httpClient';
import appStore from 'stores/appStore';

class GuestStore {
    constructor() {
        makeAutoObservable(this);
    }

    login_ = async (username, password) => {
        appStore.logout(true);

        Runtime.log(
            'verbose',
            () => `Trying to login with username [${username}] ...`
        );
        const { result: auth } = await httpClient.post(['auth', 'login'], {
            username,
            password,
        });
        Runtime.log('verbose', () => ['Successfully logged in. Token:', auth]);

        appStore.onLoggedIn(auth);
    };
}

const guestStore = new GuestStore();

export default guestStore;
