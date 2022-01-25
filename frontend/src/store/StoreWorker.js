import { store } from './store';
import {
	resetUserCart,
	setAuthenticated,
	setUserCart,
	setUserId,
	setUsername,
	setUserRole,
	removeItemUserCart,
	decreaseUserCart,
} from './user';
import {
	addStatusModalItem,
	hideLoader,
	removeStatusModalItem,
	showLoader,
} from './settings';
import { resetProducts, setCategories, setProductParams, setProducts } from './siteData';

class StoreWorkerClass {
	constructor(store) {
		this.store = store;
	}

	setAuthenticated = (payload) =>	this.store.dispatch(setAuthenticated(payload));

	showLoader = () => this.store.dispatch(showLoader());
	hideLoader = () => this.store.dispatch(hideLoader());

	setUserId =  (payload) => this.store.dispatch(setUserId(payload));
	setUserRole = (payload) => this.store.dispatch(setUserRole(payload));

	setUsername = (payload) => this.store.dispatch(setUsername(payload));
	setUserCart = (payload) => this.store.dispatch(setUserCart(payload));
	resetUserCart = () => this.store.dispatch(resetUserCart());
	removeItemUserCart = (payload) => this.store.dispatch(removeItemUserCart(payload));
	decreaseUserCart = (payload) => this.store.dispatch(decreaseUserCart(payload));

	setProductParams = (payload) => this.store.dispatch(setProductParams(payload));

	setCategories = (payload) => this.store.dispatch(setCategories(payload));

	setProducts = (payload) => this.store.dispatch(setProducts(payload));
	resetProducts = () => this.store.dispatch(resetProducts());

	addStatusModalItem = (payload) => this.store.dispatch(addStatusModalItem(payload));
	removeStatusModalItem = (payload) => this.store.dispatch(removeStatusModalItem(payload));

}

export const StoreWorker = new StoreWorkerClass(store);
