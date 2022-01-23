import { createSelector } from 'reselect';

const getSettingsSelector = state => state.settings;

export const getStatusModalListSelector = createSelector(
	getSettingsSelector,
	settings => settings.statusModalList,
);
