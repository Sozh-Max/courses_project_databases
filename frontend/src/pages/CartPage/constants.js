import { handlerNames } from '../../components/TableComponent';

export const cartsColumn = [
	{
		width: 400,
		label: 'Название',
		dataKey: 'title',
	},
	{
		width: 300,
		label: 'Цена',
		dataKey: 'price',
	},
	{
		width: 300,
		label: 'Кол-во',
		dataKey: 'value',
	},
	{
		width: 400,
		label: 'Цена всего',
		dataKey: 'totalPrice',
	},
	{
		width: 240,
		label: 'Действия',
		dataKey: 'actions',
		isCellCSS: {
			padding: 0,
		},
		handlerCellName: handlerNames.ACTIONS_PANEL,
	},
];