import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import Box from '@mui/material/Box';

import { TableComponent } from '../../components/TableComponent';
import { cartsColumn } from './constants';
import { StoreWorker } from '../../store';
import { ButtonCustom } from '../../components/UIComponents';
import { buttonTypes } from '../../components/UIComponents/buttons/ButtonCustom/constants';
import { ApiClient } from '../../api';
import { useNavigate } from 'react-router-dom';

import { styles } from './styles';

export const CartPage = () => {
	const navigate = useNavigate();
	const {userCart, id} = useSelector(state => state.user);

	const createOrder = async () => {
		return ApiClient.createOrder({
			userId: id,
			orderList: userCart,
		}).then(data => {
			navigate('/Orders');
			StoreWorker.resetUserCart();
		})
	}

	const handleEventMinus = (id) => {
		StoreWorker.decreaseUserCart({ id });
	}

	const handleEventPlus = (id) => {
		StoreWorker.setUserCart({ id });
	}

	const handleEventDelete = (id) => {
		StoreWorker.removeItemUserCart(id);
	}

	const total = useMemo(() => {
		const reducer = (previousValue, currentValue) => previousValue + currentValue.price * currentValue.value
		return userCart.reduce(reducer, 0);
	}, [userCart]);

	const cartList = useMemo(() => {
		return userCart.map(elem => ({
			title: elem.title,
			price: elem.price,
			value: elem.value,
			totalPrice: elem.price * elem.value,
			actions: {
				id: elem.id,
			}
		}))
	}, [userCart]);

	return (
		<Box sx={styles.wrapper}>
			<TableComponent
				columns={cartsColumn}
				rows={cartList}
				panelEventMinusItem={handleEventMinus}
				panelEventPlusItem={handleEventPlus}
				panelEventDeleteItem={handleEventDelete}
			/>
			<Box sx={styles.panel}>
				<Box>
					{`Всего стоимость: ${total}`}
				</Box>
				<Box>
					{Boolean(userCart.length) && (
						<ButtonCustom
							text="Заказать"
							customType={buttonTypes.ADD_TO_BASKET}
							onClick={createOrder}
						/>
					)}
				</Box>
			</Box>
		</Box>
	)
}