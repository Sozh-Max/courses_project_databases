export const styles = {
  getInputStyles: (theme) => ({
    width: '100%',
    '& .MuiOutlinedInput-input': {
      paddingTop: '8px',
      paddingBottom: '7px',
      color: theme.basic.colorText,
      backgroundColor: theme.basic.inputBackgroundColor,
    },
    '& .MuiInputLabel-outlined': {
      color: theme.basic.labelColorText,
      top: -7,
      fontSize: 14,
    },
    '& .MuiInputLabel-outlined.MuiInputLabel-shrink':{
      transform: 'translate(14px, 0px) scale(0.75)',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.basic.borderColor,
      padding: '5px',
      color: theme.basic.labelColorText,
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
    '&:hover .Mui-disabled .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '& .MuiInputBase-root.Mui-disabled': {
      opacity: 0.8,
    }
  }),
}

