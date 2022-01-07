import React from 'react';

import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import EditIcon from '@mui/icons-material/Edit';
import AlarmIcon from '@mui/icons-material/Alarm';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

import { iconTypes } from './constants';

export const getIconByType = type => {
  switch(type) {
    case iconTypes.DELETE:
      return <HighlightOffIcon />
    case iconTypes.EDIT:
      return <EditIcon />
    case iconTypes.LOGIN_USER:
      return <PersonAddAltIcon />
    default:
      return <AlarmIcon />
  }
}
