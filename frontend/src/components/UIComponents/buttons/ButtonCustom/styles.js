export const styles = {
  buttonCreate: (theme) => ({
    backgroundColor: theme.basic.mainBackgroundColor,
    color: theme.basic.colorText,
    textTransform: 'none',
    borderBottom: `3px solid ${theme.basic.basicColor}`,
    padding: '7px 20px 5px',
    fontSize: 14,
    lineHeight: 1.3,

    '&:hover': {
      backgroundColor: theme.basic.tableRowBackgroundColor,
    },

    '& .MuiButton-startIcon': {
      color: theme.basic.basicColor,
    }
  }),
  buttonAddToBasket: (theme) => ({
    backgroundColor: theme.basic.mainBackgroundColor,
    color: theme.basic.colorText,
    textTransform: 'none',
    border: `1px solid ${theme.basic.basicColor}`,
    padding: '7px 20px 5px',
    fontSize: 14,
    lineHeight: 1.3,

    '&:hover': {
      backgroundColor: theme.basic.borderColor,
    },

    '& .MuiButton-startIcon': {
      color: theme.basic.basicColor,
    }
  })
}
