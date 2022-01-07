export const styles = {
  getFormControlStyles: (theme) => ({
    width: '100%',
    backgroundColor: theme.basic.inputBackgroundColor,
    '& .MuiOutlinedInput-input': {
      paddingTop: '8px',
      paddingBottom: '7px',
      color: theme.basic.colorText,
    },
    '& .MuiInputLabel-outlined': {
      color: theme.basic.labelColorText,
      top: -7,
      fontSize: 14,
    },
    '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
      transform: 'translate(14px, 0px) scale(0.75)',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.basic.borderColor,
      '&:focus': {
        color: 'red',
      },
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.basic.borderActiveColor + ' !important',
      borderWidth: '1px !important',
      color: theme.basic.labelColorText + ' !important',
    },
    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.basic.borderActiveColor + ' !important',
      borderWidth: '1px !important',
      color: theme.basic.labelColorText + ' !important',
    },
    '& .MuiIconButton-root': {
      color: theme.basic.labelColorText,
    }
  }),
};
