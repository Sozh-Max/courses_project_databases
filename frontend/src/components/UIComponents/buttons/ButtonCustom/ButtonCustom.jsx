import React from 'react';

import Button from '@mui/material/Button';

import {
  getIcon,
} from './utils';
import {
  buttonParams,
  buttonTypes,
} from './constants';

import { styles } from './styles';


export const ButtonCustom = ({
  text,
  size,
  onClick,
  variant,
  iconCustom,
  disabled,
  icon,
  customType,
  autoFocus,
  style,
}) => {

  return (
    <Button
      style={style ?? null}
      variant={variant ?? 'contained'}
      size={size ?? 'small'}
      startIcon={getIcon(icon, iconCustom, customType)}
      sx={styles[buttonParams[customType ? customType : buttonTypes.BASIC].style]}
      onClick={onClick ?? null}
      autoFocus={autoFocus}
      disabled={disabled}
    >
      {text ? text : buttonParams[customType ? customType : buttonTypes.BASIC].text}
    </Button>
  )
}
