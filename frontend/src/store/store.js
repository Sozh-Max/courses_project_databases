import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userReducer } from './user';
import { settingsReducer } from './settings';
import { siteDataReducer } from './siteData';

const rootReducer = combineReducers({
	user: userReducer,
	settings: settingsReducer,
	siteData: siteDataReducer,
});

export const store = configureStore({
	reducer: rootReducer,
})