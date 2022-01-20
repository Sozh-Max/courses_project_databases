import { handlerNames } from '../../../components/TableComponent';

export const initCategoriesState = {
	id: '',
	type: '',
	title: '',
	price: '',
	url: '',
	category: null,
	params: null,
	titleError: false,
	priceError: false,
	urlError: false,
	categoryError: false,
}

export const productsColumn = [
	{
		width: 500,
		label: 'Название',
		dataKey: 'title',
	},
	{
		width: 500,
		label: 'Категория',
		dataKey: 'categoryTitle',
	},
	{
		width: 500,
		label: 'Цена',
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