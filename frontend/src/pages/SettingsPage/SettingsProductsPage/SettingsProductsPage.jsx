import React, { useEffect, useMemo, useState } from 'react';

import Box from '@mui/material/Box';

import { ButtonCustom, ModalProduct } from '../../../components/UIComponents';
import { buttonTypes } from '../../../components/UIComponents/buttons/ButtonCustom/constants';
import { productsColumn, initCategoriesState } from './constants';
import { ApiClient } from '../../../api';
import { StoreWorker } from '../../../store';
import { useSelector } from 'react-redux';
import { TableComponent } from '../../../components/TableComponent';
import { transformProducts } from './transform';

import { styles } from './styles';

export const SettingsProductsPage = () => {
	const {products} = useSelector(state => state.siteData);
	const {categories} = useSelector(state => state.siteData);
	const {productParams} = useSelector(state => state.siteData);

	const productsList = useMemo(() => {
		return transformProducts(products);
	}, [products])

	useEffect(() => {
		const getProducts = async () => {
			return await ApiClient.getAllProducts();
		}

		getProducts().then(data => {
			StoreWorker.setProducts(data);
		})
	}, [])

	const initState = useMemo(() => ({
		...initCategoriesState,
		params: productParams.map(elem => ({
			...elem,
			value: '',
		}))
	}), [initCategoriesState, productParams])

	const [openModal, setOpenModal] = useState(false);

	const [coreData, setCoreData] = useState(initState);

	const handleOpenModal = () => setOpenModal(true);
	const handleCloseModal = () => {
		setCoreData(initState);
		setOpenModal(false);
	};

	const createItem = async () => {
		await ApiClient.createProduct({
			title: coreData.title.trim(),
			price: Number(coreData.price.trim()),
			params: coreData.params,
			categoryId: coreData.category.value,
			url: coreData.url,
		}).then(data => {
			StoreWorker.setProducts(transformProducts(data));
			handleCloseModal();
		}).catch(e => {
			console.log(e);
			handleCloseModal();
		});
	};

	const editItem = async () => {
		await ApiClient.updateProduct({
			id: coreData.id,
			title: coreData.title.trim(),
			price: Number(coreData.price.trim()),
			params: coreData.params,
			categoryId: coreData.category.value,
			url: coreData.url,
		}).then(data => {
			StoreWorker.setProducts(transformProducts(data));
			handleCloseModal();
		}).catch(e => {
			console.log(e);
			handleCloseModal();
		});
	}

	const handleEventCreate = () => {
		setCoreData({
			...initState,
			type: 'create',
		});
		handleOpenModal();
	}

	const handleEventEdit = async id => {
		await ApiClient.getProductById(id).then(data => {
			setCoreData({
				...initState,
				type: 'edit',
				...data,
				price: String(data.price),
				category: {
					value: data.category_id,
					name: data.category_title,
				},
				params: productParams.map(elem => ({
					...elem,
					value: data.params.find(el => el.params_id === elem.id)
						? data.params.find(el => el.params_id === elem.id).value
						: '',
				}))
			});
			handleOpenModal();
		})
	}

	const handleEventDelete = async id => {
		await ApiClient.deleteProduct(id).then(data => {
			StoreWorker.setProducts(data);
		})
	}

	return (
		<>
			<Box sx={styles.container}>
				<Box sx={styles.buttonPanel}>
					<ButtonCustom
						text="Добавить Товар"
						customType={buttonTypes.CREATE}
						onClick={handleEventCreate}
					/>
				</Box>
				<TableComponent
					columns={productsColumn}
					rows={productsList}
					panelEventEditItem={handleEventEdit}
					panelEventDeleteItem={handleEventDelete}
				/>
			</Box>
			{openModal && (
				<ModalProduct
					open={openModal}
					core={coreData}
					categories={categories}
					title={coreData.type === 'create' ? 'Добавить Товар' :  'Редактировать Товар'}
					fullWidth
					setCore={setCoreData}
					eventApply={coreData.type === 'create' ? createItem : editItem}
					eventClose={handleCloseModal}
				/>
			)}
		</>

	);
};