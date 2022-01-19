import React, { useState } from 'react';

import Box from '@mui/material/Box';

import { ButtonCustom, ModalCategory } from '../../../components/UIComponents';
import { buttonTypes } from '../../../components/UIComponents/buttons/ButtonCustom/constants';
import { categoriesColumn, initCategoriesState } from './constants';
import { ApiClient } from '../../../api';
import { StoreWorker } from '../../../store';
import { useSelector } from 'react-redux';
import { TableComponent } from '../../../components/TableComponent';

import { styles } from './styles';
import { transformCategories } from './transform';

export const SettingsCategoriesPage = () => {
	const {categories} = useSelector(state => state.siteData);

	const [openModal, setOpenModal] = useState(false);

	const [coreData, setCoreData] = useState(initCategoriesState);

	const handleOpenModal = () => setOpenModal(true);
	const handleCloseModal = () => {
		setCoreData(initCategoriesState);
		setOpenModal(false);
	}

	const createItem = async () => {
		await ApiClient.createCategory({
			title: coreData.title.trim(),
			description: coreData.description.trim(),
		}).then(data => {
			StoreWorker.setCategories(transformCategories(data));
			handleCloseModal();
		});
	};

	const editItem = async () => {
		await ApiClient.updateCategory({
			id: coreData.id,
			title: coreData.title.trim(),
			description: coreData.description.trim(),
		}).then(data => {
			StoreWorker.setCategories(transformCategories(data));
			handleCloseModal();
		});
	}

	const handleEventCreate = () => {
		setCoreData({
			...initCategoriesState,
			type: 'create',
		});
		handleOpenModal();
	}

	const handleEventEdit = async id => {
		await ApiClient.getCategoryById(id).then(elem => {
			setCoreData({
				...initCategoriesState,
				type: 'edit',
				id: elem.id,
				title: elem.title,
				description: elem.description,
			});
			handleOpenModal();
		});
	}

	return (
		<>
			<Box sx={styles.container}>
				<Box sx={styles.buttonPanel}>
					<ButtonCustom
						text="Добавить Категорию"
						customType={buttonTypes.CREATE}
						onClick={handleEventCreate}
					/>
				</Box>
				<TableComponent
					columns={categoriesColumn}
					rows={categories}
					panelEventEditItem={handleEventEdit}
				/>
			</Box>
			{openModal && (
				<ModalCategory
					open={openModal}
					core={coreData}
					title={coreData.type === 'create' ? 'Добавить Категорию' :  'Редактировать Категорию'}
					fullWidth
					setCore={setCoreData}
					eventApply={coreData.type === 'create' ? createItem : editItem}
					eventClose={handleCloseModal}
				/>
			)}
		</>

	);
};