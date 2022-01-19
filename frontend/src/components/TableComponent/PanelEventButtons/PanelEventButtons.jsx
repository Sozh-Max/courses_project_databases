import React from 'react';

import { ButtonIconCustom } from '../../UIComponents';
import { iconTypes } from '../../UIComponents';

import { styles } from './styles';
import Box from '@mui/material/Box';

export const PanelEventButtons = ({
  handlerData: { id, isActive },
  panelEventEditItem,
  panelEventDeleteItem,
  panelEventPlayItem,
  panelEventPauseItem
}) => {

  return (
    <Box sx={styles.wrapper}>
      {panelEventPlayItem && !isActive && (
        <Box sx={styles.buttonContainer}>
          <ButtonIconCustom
            onClick={panelEventPlayItem ? () => panelEventPlayItem(id) : null}
            customType={iconTypes.PLAY}
          />
        </Box>
      )}

      {panelEventPauseItem && isActive && (
        <Box sx={styles.buttonContainer}>
          <ButtonIconCustom
            onClick={panelEventPauseItem ? () => panelEventPauseItem(id) : null}
            customType={iconTypes.PAUSE}
          />
        </Box>
      )}

      {panelEventEditItem && (
        <Box sx={styles.buttonContainer}>
          <ButtonIconCustom
            onClick={panelEventEditItem ? () => panelEventEditItem(id) : null}
            customType={iconTypes.EDIT}
          />
        </Box>
      )}

      {panelEventDeleteItem && (
        <Box sx={styles.buttonContainer}>
          <ButtonIconCustom
            onClick={panelEventDeleteItem ? () => panelEventDeleteItem(id) : null}
            customType={iconTypes.DELETE}
          />
        </Box>
      )}
    </Box>
  )
}
