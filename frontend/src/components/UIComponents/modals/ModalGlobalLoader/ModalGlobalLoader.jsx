import React from 'react';

import Dialog from '@mui/material/Dialog';
import CircularProgress from '@mui/material/CircularProgress';

import { styles } from './styles';



export const ModalGlobalLoader = ({
  open,
}) => {

  return (
    <div>
      <Dialog
        open={open}
        aria-labelledby='alert-dialog-spinner-title'
        aria-describedby='alert-dialog-spinner-description'
        sx={styles.modalContent}
      >
        <CircularProgress
          sx={styles.getSpinnerStyles}
          style={{
            width: 100,
            height: 100,
          }}
        />
      </Dialog>
    </div>
  );
}
