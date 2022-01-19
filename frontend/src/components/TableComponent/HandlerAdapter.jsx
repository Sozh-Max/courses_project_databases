import React from 'react';

import { handlerNames } from './constants';
import { PanelEventButtons } from './PanelEventButtons';

const handlerMap = {
	[handlerNames.ACTIONS_PANEL]: PanelEventButtons,
}

export const HandlerAdapter = (data, props) => {
	let type;
	let addedProps = {};
	if (typeof data === 'string') {
		type = data;
	} else {
		const { handlerName, ...newProps } = data;
		type = handlerName;
		addedProps = newProps;
	}

	const Element = handlerMap[type];

	return (
		<Element
			{ ...props }
			{ ...addedProps }
		/>
	)
}
