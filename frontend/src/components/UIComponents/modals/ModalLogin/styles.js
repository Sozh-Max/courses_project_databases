export const styles = {
  container: {
    width: 300,
  },
  block: {
    marginTop: '25px',
    marginBottom: '25px',
  },
  buttonSubmit: (theme) => ({
    width: '100%',
    color: theme.basic.basicColor,
    textTransform: 'none',
  }),
  inputContainer: {
    position: 'relative',
    '& .MuiInputBase-root': {
      paddingRight: '40px',
    },
  },
  inputPassword: {
    paddingRight: '40px',
  },
  eyeButton: (theme) => ({
    position: 'absolute',
    right: 0,
    top: 0,
    color: theme.basic.labelColorText,
    padding: '5px',
    '& .MuiSvgIcon-root': {
      width: '24px',
      height: '24px',
    },
  }),
}
