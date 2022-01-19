export const transformProducts = list => list.map(elem => ({
	...elem,
	actions: {
		id: elem.id,
	},
}));
