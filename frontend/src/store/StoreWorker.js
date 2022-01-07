import { store } from './store';
import { setAuthenticated, setUsername, setUserRole } from './user';
import { hideLoader, showLoader } from './settings';


class StoreWorkerClass {
	constructor(store) {
		this.store = store;
	}

	setAuthenticated = (payload) =>	this.store.dispatch(setAuthenticated(payload));

	showLoader = () => this.store.dispatch(showLoader());
	hideLoader = () => this.store.dispatch(hideLoader());

	setUserRole = (payload) => this.store.dispatch(setUserRole(payload));

	setUsername = (payload) => this.store.dispatch(setUsername(payload));
}

export const StoreWorker = new StoreWorkerClass(store);
