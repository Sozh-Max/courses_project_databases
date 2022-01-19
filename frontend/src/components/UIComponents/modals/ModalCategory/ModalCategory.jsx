import React from 'react';

import { ModalWrapper } from '../ModalWrapper';
import { ColumnContainer, LabelItem, RowContainer } from '../modalBuildComponents';
import { InputBaseCustom } from '../../inputs';

export const ModalCategory = ({
	core,
	setCore,
	eventApply,
	...props
}) => {
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
		const errors = {}
		if (!core.title.trim().length) {
			result = false;
			errors['titleError'] = true;
		}
		if (!core.description.trim().length) {
			result = false;
			errors['descriptionError'] = true;
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
					<LabelItem>Название Категории</LabelItem>
					<InputBaseCustom
						placeholder='Введите название категории'
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
					<LabelItem>Описание</LabelItem>
					<InputBaseCustom
						placeholder='Введите Описание'
						value={core.description}
						error={core.descriptionError}
						rows='3'
						multiline
						onChange={(e) => {
							handleChangeCore([{
								key: 'description',
								value: e.target.value,
							}, {
								key: 'descriptionError',
								value: false,
							}]);
						}}
					/>
				</ColumnContainer>
			</RowContainer>
		</ModalWrapper>
	)
}