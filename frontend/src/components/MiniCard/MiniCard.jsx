import React from 'react';

import Box from '@mui/material/Box';

import { styles } from './styles';
import { useNavigate } from 'react-router-dom';
import { ButtonCustom } from '../UIComponents';
import { buttonTypes } from '../UIComponents/buttons/ButtonCustom/constants';
import { useSelector } from 'react-redux';

export const MiniCard = ({
	id,
	title,
	price,
	url,
	categoryId,
	categoryTitle,
	params,
}) => {
	const { role } = useSelector(state => state.user);

	const navigate = useNavigate();

	const handleClickCategory = () => {
		navigate(`/${categoryId}`)
	}

	return (
		<Box sx={styles.wrapper}>
			<Box sx={styles.container}>
				<Box sx={styles.imageBlock}>
					<img
						src={url}
						alt={title}
					/>
				</Box>
				<Box sx={styles.content}>
					<Box sx={styles.contentDesc}>
						<Box sx={styles.contentTitle}>
							{ title }
						</Box>
						<Box
							sx={styles.categoryTitle}
							onClick={handleClickCategory}
						>
							{ categoryTitle }
						</Box>
						<Box sx={styles.params}>
							{ params.map(elem => (
								<Box sx={styles.paramItem}>
									{ `${elem.name}: ${elem.value}` }
								</Box>
							)) }
						</Box>
						<Box sx={styles.priceBlock}>
							{ `Цена: ` }
							<Box component='span' sx={styles.price}>{price + 'р'}</Box>
						</Box>
						{(role == 2) && (
							<Box sx={styles.buttonContainer}>
								<ButtonCustom
									customType={buttonTypes.ADD_TO_BASKET}
									text='В корзину'
								/>
							</Box>
						)}
					</Box>
				</Box>
			</Box>
		</Box>
	)
}