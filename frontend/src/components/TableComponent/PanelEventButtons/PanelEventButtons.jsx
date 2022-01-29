import React from 'react';

import { ButtonIconCustom } from '../../UIComponents';
import { iconTypes } from '../../UIComponents';

import { styles } from './styles';
import Box from '@mui/material/Box';

export const PanelEventButtons = ({
  handlerData: { id, isActive },
  panelEventEditItem,
  panelEventDeleteItem,
  panelEventMinusItem,
  panelEventPlusItem,
  panelEventDetailsItem,
}) => {

  return (
    <Box sx={styles.wrapper}>
      {panelEventMinusItem && (
        <Box sx={styles.buttonContainer}>
          <ButtonIconCustom
            onClick={panelEventMinusItem ? () => panelEventMinusItem(id) : null}
            customType={iconTypes.MINUS}
          />
        </Box>
      )}

      {panelEventPlusItem && (
        <Box sx={styles.buttonContainer}>
          <ButtonIconCustom
            onClick={panelEventPlusItem ? () => panelEventPlusItem(id) : null}
            customType={iconTypes.PLUS}
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

      {panelEventDetailsItem && (
        <Box sx={styles.buttonContainer}>
          <ButtonIconCustom
            onClick={panelEventDetailsItem ? () => panelEventDetailsItem(id) : null}
            customType={iconTypes.DETAILS}
          />
        </Box>
      )}
    </Box>
  )
}
