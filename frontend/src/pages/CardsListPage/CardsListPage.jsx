import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import Box from '@mui/material/Box';

import { ApiClient } from '../../api';
import { StoreWorker } from '../../store';
import { MiniCard } from '../../components/MiniCard';

import { styles } from './styles';

export const CardsListPage = () => {
	const params = useParams();
	const navigate = useNavigate();
	const { products } = useSelector(state => state.siteData)

	useEffect(() => {
		const getProducts = async () => {
			return (params?.id
				? Number.isNaN(Number(params.id))
					? navigate('/')
					: ApiClient.getAllProducts(params.id)
				: await ApiClient.getAllProducts()
			);
		}

		getProducts().then(data => {
			StoreWorker.setProducts(data);
		})
	}, [params])


	return (
		<Box sx={styles.wrapper}>
			{products?.map(elem => (
				<MiniCard
					key={elem.id}
					{ ...elem }
				/>
			))}
		</Box>
	)
}