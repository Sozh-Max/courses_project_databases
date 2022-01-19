import React from 'react';
import { NavLink } from 'react-router-dom';

import Box from '@mui/material/Box';

import { styles } from './styles';

export const TabNavigation = ({
  navigationList,
  eventItemClick,
}) => {

  const handleClick = () => {
    if (eventItemClick) {
      eventItemClick();
    }
  }

  return (
    <Box
      component='nav'
      sx={styles.wrapper}
    >
      {
        navigationList && navigationList.map(elem => (
          <Box
            component={NavLink}
            sx={styles.button}
            to={elem.route}
            key={elem.route}
            onClick={handleClick}
          >
            {elem.title}
          </Box>
        ))
      }
    </Box>
  );
}
