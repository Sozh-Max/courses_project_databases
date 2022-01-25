import { handlerNames } from '../../../components/TableComponent';

export const initCategoriesState = {
	id: '',
	type: '',
	title: '',
	description: '',
	titleError: false,
	descriptionError: false,
}

export const categoriesColumn = [
	{
		width: 400,
		label: 'Название',
		dataKey: 'title',
	},
	{
		width: 900,
		label: 'Описание',
		dataKey: 'description',
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