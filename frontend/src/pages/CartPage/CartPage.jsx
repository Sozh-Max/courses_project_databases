import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import Box from '@mui/material/Box';

import { TableComponent } from '../../components/TableComponent';
import { cartsColumn } from './constants';
import { StoreWorker } from '../../store';

import { styles } from './styles';
import { ButtonCustom } from '../../components/UIComponents';
import { buttonTypes } from '../../components/UIComponents/buttons/ButtonCustom/constants';

export const CartPage = () => {
	const {userCart} = useSelector(state => state.user);

	const createOrder = async () => {

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
					<ButtonCustom
						text="Заказать"
						customType={buttonTypes.ADD_TO_BASKET}
						onClick={createOrder}
					/>
				</Box>
			</Box>
		</Box>
	)
}