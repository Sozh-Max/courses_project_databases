import React from 'react';

import TextField from '@mui/material/TextField';

import { styles } from './styles';

export const InputCustom = ({
  className,
  onChange = f=>f,
  value,
  variant = 'outlined',
  ...props
}) => {

  return (
    <TextField
      className={className}
      sx={styles.getInputStyles}
      variant={variant}
      value={value}
      onChange={onChange}
      {...props}
    />
  )
}
