import React from 'react';

import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import EditIcon from '@mui/icons-material/Edit';
import AlarmIcon from '@mui/icons-material/Alarm';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { iconTypes } from './constants';

export const getIconByType = type => {
  switch(type) {
    case iconTypes.DELETE:
      return <HighlightOffIcon />
    case iconTypes.EDIT:
      return <EditIcon />
    case iconTypes.LOGIN_USER:
      return <PersonAddAltIcon />
    case iconTypes.LOGOUT:
      return <LogoutIcon />
    case iconTypes.PLUS:
      return <AddIcon />
    case iconTypes.MINUS:
      return <RemoveIcon />
    default:
      return <AlarmIcon />
  }
}
