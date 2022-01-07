import React from 'react';

import IconButton from '@mui/material/IconButton';

import { getIconByType } from './utils';
import { iconTypes } from './constants';

import { styles } from './styles';

export const ButtonIconCustom = ({
  icon,
  customType,
  onClick,
  ...props
}) => {

  return (
    <IconButton
      sx={styles[customType ?? iconTypes.DEFAULT]}
      onClick={onClick ?? null}
      { ...props }
    >
      { icon ?? getIconByType(customType) }
    </IconButton>
  )
}

