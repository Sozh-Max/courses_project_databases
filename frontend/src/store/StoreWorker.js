import { store } from './store';
import { setAuthenticated, setUsername, setUserRole } from './user';
import { addStatusModalItem, hideLoader, removeStatusModalItem, showLoader } from './settings';
import { resetProducts, setCategories, setProductParams, setProducts } from './siteData';


class StoreWorkerClass {
	constructor(store) {
		this.store = store;
	}

	setAuthenticated = (payload) =>	this.store.dispatch(setAuthenticated(payload));

	showLoader = () => this.store.dispatch(showLoader());
	hideLoader = () => this.store.dispatch(hideLoader());

	setUserRole = (payload) => this.store.dispatch(setUserRole(payload));

	setUsername = (payload) => this.store.dispatch(setUsername(payload));

	setProductParams = (payload) => this.store.dispatch(setProductParams(payload));

	setCategories = (payload) => this.store.dispatch(setCategories(payload));

	setProducts = (payload) => this.store.dispatch(setProducts(payload));
	resetProducts = () => this.store.dispatch(resetProducts());

	addStatusModalItem = (payload) => this.store.dispatch(addStatusModalItem(payload));
	removeStatusModalItem = (payload) => this.store.dispatch(removeStatusModalItem(payload));

}

export const StoreWorker = new StoreWorkerClass(store);
