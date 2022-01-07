import React from 'react'

import AddIcon from '@mui/icons-material/Add';

export const buttonTypes = {
  BASIC: 'BASIC',
  CREATE: 'CREATE',
} 

export const buttonParams = {
  BASIC: {
    icon: null,
    text: 'Ok',
    style: 'buttonDefault',
  },
  CREATE: {
    icon: <AddIcon />,
    text: 'Create',
    style: 'buttonCreate',
  },
}
