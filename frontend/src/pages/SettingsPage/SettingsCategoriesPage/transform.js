export const transformCategories = list => list.map(elem => ({
	...elem,
	actions: {
		id: elem.id,
	},
}));
