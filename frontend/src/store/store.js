import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userReducer } from './user';
import { settingsReducer } from './settings';

const rootReducer = combineReducers({
	user: userReducer,
	settings: settingsReducer,
});

export const store = configureStore({
	reducer: rootReducer,
})