import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';

import { styles } from './styles';
import { ApiClient } from '../../api';
import { useSelector } from 'react-redux';
import { TableComponent } from '../../components/TableComponent';
import { orderColumn } from './constants';

export const OrdersPage = () => {
	const [orderList, setOrderList] = useState([]);
	const { id } = useSelector(state => state.user);

	useEffect(() => {
		const getAllOrders = async () => {
			return await ApiClient.getAllOrders(id);
		}
		getAllOrders().then(data => {
			setOrderList(data.map(elem => ({
				id: elem.id,
				date: new Date(elem.created_at).toLocaleDateString('ru-Ru'),
				price: elem.products.reduce((sum, next) => {
					return sum + next.count * next.price;
				}, 0),
				products: elem.products,
			})))
		});
	}, [])

	return (
		<Box sx={styles.wrapper}>
			<TableComponent
				columns={orderColumn}
				rows={orderList}
			/>
			<Box sx={styles.panel}>
				{`Количество заказов: ${orderList.length}.
				 Общая сумма заказов равна ${orderList.length ? orderList.reduce((sum, next) => {
					 return sum + next.price;
				},0) : 0}`}
			</Box>
		</Box>
	)
}
