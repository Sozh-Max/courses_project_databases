import React, { useCallback, useEffect, useState } from 'react';

import Box from '@mui/material/Box';

import { styles } from './styles';
import { ApiClient } from '../../api';
import { useSelector } from 'react-redux';
import { TableComponent } from '../../components/TableComponent';
import { orderColumn, productsColumn } from './constants';
import { ModalTable } from '../../components/UIComponents';

export const OrdersPage = () => {
	const [orderList, setOrderList] = useState([]);
	const [productsList, setProductsList] = useState([]);
	const [openModal, setOpenModal] = useState(false);
	const [productId, setProductId] = useState(null);
	const { id, role } = useSelector(state => state.user);

	useEffect(() => {
		const getAllOrders = async () => {
			return await ApiClient.getAllOrders((role == 2) ? id : undefined);
		}
		getAllOrders().then(data => {
			setOrderList(data.map(elem => ({
				id: elem.id,
				userName: elem.userName,
				date: new Date(elem.created_at).toLocaleDateString('ru-Ru'),
				price: elem.products.reduce((sum, next) => {
					return sum + next.count * next.price;
				}, 0),
				actions: {
					id: elem.id,
				},
				products: elem.products.map(el => ({
					...el,
					total: el.count * el.price,
				})),
			})))
		});
	}, []);

	const handleEventDetails = useCallback((id) => {
		const element = orderList.find(el => el.id === id)
		setProductId(element.id);
		setProductsList(element?.products ? element.products : []);
		setOpenModal(true);
	}, [orderList]);

	const closeModal = () => {
		setOpenModal(false);
		setProductId(null)
		setProductsList([]);
	}

	return (
		<>
			<Box sx={styles.wrapper}>
				<TableComponent
					columns={orderColumn}
					rows={orderList}
					panelEventDetailsItem={handleEventDetails}
				/>
				<Box sx={styles.panel}>
					{`Количество заказов: ${orderList.length}.
						 Общая сумма заказов равна ${orderList.length ? orderList.reduce((sum, next) => {
						return sum + next.price;
					},0) : 0}`}
				</Box>
			</Box>
			{openModal && (
				<ModalTable
					open={openModal}
					fullScreen
					hideDialogActions
					title={`Номер заказа ${productId}`}
					columns={productsColumn}
					rows={productsList}
					eventClose={closeModal}
				/>
			)}
		</>
	)
}
