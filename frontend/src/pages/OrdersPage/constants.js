import { handlerNames } from '../../components/TableComponent';

export const orderColumn = [
	{
		width: 400,
		label: 'Номер заказа',
		dataKey: 'id',
	},
	{
		width: 400,
		label: 'Дата',
		dataKey: 'date',
	},
	{
		width: 400,
		label: 'Общая стоимость',
		dataKey: 'price',
	},
	{
		width: 300,
		label: 'Действия',
		dataKey: 'actions',
		isCellCSS: {
			padding: 0,
		},
		handlerCellName: handlerNames.ACTIONS_PANEL,
	},
];

export const productsColumn = [
	{
		width: 500,
		label: 'Название',
		dataKey: 'title',
	},
	{
		width: 500,
		label: 'Количество',
		dataKey: 'count',
	},
	{
		width: 500,
		label: 'Цена',
		dataKey: 'price',
	},
	{
		width: 500,
		label: 'Цена всего',
		dataKey: 'total',
	},
];
