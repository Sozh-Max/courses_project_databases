import React from 'react'

import Button from '@mui/material/Button';

import { styles } from './styles';

export const ButtonSubmit = ({
  text,
  size,
  onClick,
  variant,
}) => {
  return (
    <Button
      variant={variant ? variant : 'contained'}
      size={size ? size : 'small'}
      type='submit'
      sx={styles.getButtonStyles}
      onClick={onClick ? () => onClick() : null}
    >
      {text ? text : 'Submit'}
    </Button>
  )
}
