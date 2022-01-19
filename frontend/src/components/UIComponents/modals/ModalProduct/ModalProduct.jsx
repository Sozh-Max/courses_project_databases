import React, { useMemo } from 'react';

import { ModalWrapper } from '../ModalWrapper';
import { ColumnContainer, LabelItem, RowContainer } from '../modalBuildComponents';
import { InputBaseCustom } from '../../inputs';
import { AutocompleteCustom } from '../../selects';

export const ModalProduct = ({
	core,
	setCore,
	eventApply,
	categories,
	...props
}) => {
	const categoriesList = useMemo(() => categories.map(elem => ({
		name: elem.title,
		value: elem.id,
	})), [categories])

	const handleChangeCore = (type, data) => {
		if (typeof type === 'string') {
			setCore({
				...core,
				[type]: data,
			});
		}
		if (Array.isArray(type) & !data) {
			const obj = {};
			type.forEach(elem => {
				obj[elem.key] = elem.value;
			});
			setCore({
				...core,
				...obj,
			});
		}
	};

	const validate = () => {
		let result = true;
		const errors = {};
		if (!core.title.trim().length) {
			result = false;
			errors['titleError'] = true;
		}
		if (!core.title.trim().length || Number.isNaN(Number(core.price))) {
			result = false;
			errors['priceError'] = true;
		}
		if (!core?.category) {
			result = false;
			errors['categoryError'] = true;
		}
		if (!core?.url.trim().length) {
			result = false;
			errors['urlError'] = true;
		}
		if (!result) {
			setCore({
				...core,
				...errors,
			});
		}
		return result;
	}

	const sendApplyData = () => {
		if (validate()) {
			eventApply();
		}
	};

	return (
		<ModalWrapper
			{...props}
			eventApply={sendApplyData}
		>
			<RowContainer>
				<ColumnContainer>
					<LabelItem>Название Товара</LabelItem>
					<InputBaseCustom
						placeholder='Введите название товара'
						value={core.title}
						error={core.titleError}
						onChange={(e) => {
							handleChangeCore([{
								key: 'title',
								value: e.target.value,
							}, {
								key: 'titleError',
								value: false,
							}]);
						}}
					/>
				</ColumnContainer>
			</RowContainer>

			<RowContainer>
				<ColumnContainer>
					<LabelItem>Картинка</LabelItem>
					<InputBaseCustom
						placeholder='Введите ссылку на картинку'
						value={core.url}
						error={core.urlError}
						onChange={(e) => {
							handleChangeCore([{
								key: 'url',
								value: e.target.value,
							}, {
								key: 'urlError',
								value: false,
							}]);
						}}
					/>
				</ColumnContainer>
			</RowContainer>

			<RowContainer>
				<ColumnContainer>
					<LabelItem>Цена</LabelItem>
					<InputBaseCustom
						placeholder='Введите цену'
						value={core.price}
						error={core.priceError}
						onChange={(e) => {
							handleChangeCore([{
								key: 'price',
								value: e.target.value,
							}, {
								key: 'priceError',
								value: false,
							}]);
						}}
					/>
				</ColumnContainer>
			</RowContainer>

			<RowContainer>
				<ColumnContainer>
					<LabelItem>Категория</LabelItem>
					<AutocompleteCustom
						list={categoriesList}
						onChange={(e, data) => {
							handleChangeCore([{
								key: 'category',
								value: data,
							}, {
								key: 'categoryError',
								value: false,
							}]);
						}}
						value={core.category
							? categoriesList.find(elem => elem.value === core.category.value)
							: core.category
						}
						error={core.categoryError}
						disableClearable
						placeholder={'Выберите категорию'}
					/>
				</ColumnContainer>
			</RowContainer>

				{core.params.map(elem => (
					<RowContainer key={elem.id}>
						<ColumnContainer>
							<LabelItem
								title={elem.description}
							>
								{elem.name}
							</LabelItem>
							<InputBaseCustom
								placeholder={`Введите параметр`}
								value={elem.value}
								onChange={(e) => {
									setCore({
										...core,
										params: core.params.map(item => ({
											...item,
											value: item.id === elem.id ? e.target.value : item.value,
										}))
									})
								}}
							/>
						</ColumnContainer>
					</RowContainer>
				))}
		</ModalWrapper>
	)
}