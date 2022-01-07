export const styles = {
  getButtonStyles: (theme) => ({
    width: '100px',
    paddingTop: '7px',
    paddingBottom: '5px',
    lineHeight: 1.55,
    fontSize: 14,
    borderRadius: '8px',
    color: theme.basic.colorText,
    backgroundColor: theme.basic.basicColor,
    textTransform: 'none',
    display: 'block',
    marginLeft: 'auto',

    '&:hover': {
      backgroundColor: theme.basic.borderActiveColor,
    },
  })
}
