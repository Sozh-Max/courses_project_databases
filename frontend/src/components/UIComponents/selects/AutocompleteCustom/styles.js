export const styles = {
  wrapper: (theme) => ({
    width: '100%',
    color: theme.basic.colorText,
    // '& .MuiAutocomplete-inputRoot': {
    //   backgroundColor: theme.basic.inputBackgroundColor,
    //   // border: 'none',
    //   borderRadius: '3px',
    //   minHeight: '39px',
    // },
    // '& .MuiAutocomplete-inputRoot.Mui-error': {
    //   border: `1px solid #ff0000`,
    // },
    // '& .MuiInput-underline.Mui-error:after': {
    //   border: 'none',
    // },
    // '& .MuiAutocomplete-inputFocused': {
    //   color: theme.basic.colorText,
    //   paddingLeft: '5px',
    // },
    // '& .MuiIconButton-root': {
    //   color: theme.basic.colorText,
    // },
    // '& .MuiInputLabel-formControl': {
    //   color: theme.basic.labelColorText,
    //   zIndex: 10,
    //   left: '15px',
    //   top: '5px',
    // },
    // '& .MuiInputLabel-formControl.MuiInputLabel-shrink': {
    //   top: '0px',
    // },
    // '& .MuiChip-root': {
    //   backgroundColor: theme.basic.inputBackgroundColor,
    //   color: theme.basic.colorText,
    //   border: `1px solid ${theme.basic.colorText}`,
    // },
    // '& .MuiChip-deleteIcon': {
    //   color: theme.basic.colorText,
    // },
    // '& .MuiAutocomplete-endAdornment': {
    //   right: '1px',
    // },
    // '& .MuiAutocomplete-inputRoot[class*="MuiInput-root"] .MuiAutocomplete-input:first-child': {
    //   paddingLeft: '15px',
    // },
    // '& .MuiAutocomplete-inputRoot.Mui-disabled': {
    //   opacity: 0.8,
    //   border: 'none',
    // }
  }),
  list: (theme) => ({
    backgroundColor: theme.basic.inputBackgroundColor,
    color: theme.basic.colorText,
    maxHeight: '350px',
    overflowY: 'auto',
    marginTop: '2px',
    '& .MuiAutocomplete-groupLabel': {
      backgroundColor: theme.basic.inputBackgroundColor,
      color: theme.basic.colorText,
    },
    '& .MuiAutocomplete-option:hover': {
      backgroundColor: theme.basic.panelBackgroundColor,
    },
    '& .MuiAutocomplete-option[data-focus="true"]': {
      backgroundColor: theme.basic.dropListActiveItemBackground,
    },
    '& .MuiAutocomplete-option[aria-selected="true"]': {
      backgroundColor: theme.basic.dropListActiveItemBackground,
    },
    '& .inactive': {
      opacity: 0.4,
    },
    '& .inactive-desc': {
      marginLeft: 5,
    },
  }),
  autocomplete: (theme) => ({
    color: theme.basic.colorText,
    borderRadius: '5px',
    border: `1px solid rgba(0,0,0,0)`,
    fontSize: 16,
    '& .MuiInput-input': {
      color: theme.basic.colorText,
      backgroundColor: theme.basic.inputBackgroundColor,
      paddingLeft: '10px !important',
      paddingRight: '10px !important',
      fontSize: 16,
    },
    '& .MuiButtonBase-root': {
      color: theme.basic.colorText,
      width: '40px',
    },
    backgroundColor: theme.basic.inputBackgroundColor,
    '& .MuiInput-root': {
      paddingRight: '40px !important',
      border: `1px solid rgba(0,0,0,0)`,
      borderRadius: '3px',
      '&:before': {
        display: 'none',
      },
      '&:after': {
        display: 'none',
      },
      '&.Mui-focused': {
        border: `1px solid ${theme.basic.borderActiveColor}`,
      },
      '&.Mui-error': {
        border: `1px solid ${theme.basicButtons.colorDelete}`,
      },
    },
    '& .MuiChip-filled': {
      width: 'auto',
      border: `1px solid ${theme.basic.borderColor}`,
    },
    '& .MuiChip-deleteIcon': {
      color: `${theme.basicButtons.colorDelete} !important`,
      '&:hover': {
        color: `${theme.basicButtons.colorDeleteHover} !important`,
      },
    },
    '& .MuiChip-label': {
      position: 'relative',
      top: '3px',
    },
  }),
}
