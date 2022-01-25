export const styles = {
  DEFAULT: (theme) => ({
    padding: '5px',
    color: theme.basicButtons.colorDefault,
    '&:hover': {
      color: theme.basicButtons.colorDefaultHover,
    },
    '& .MuiSvgIcon-root': {
      width: 20,
      height: 20,
    },
  }),
  DELETE: (theme) => ({
    color: theme.basicButtons.colorDelete,
    padding: '5px',
    '&:hover': {
      color: theme.basicButtons.colorDeleteHover,
    },
    '& .MuiSvgIcon-root': {
      width: 20,
      height: 20,
    },
  }),
  MINUS: (theme) => ({
    color: theme.basicButtons.colorDelete,
    padding: '5px',
    '&:hover': {
      color: theme.basicButtons.colorDeleteHover,
    },
    '& .MuiSvgIcon-root': {
      width: 20,
      height: 20,
    },
  }),
  PLUS: (theme) => ({
    color: theme.basicButtons.colorPlay,
    padding: '5px',
    '&:hover': {
      color: theme.basicButtons.colorPlayHover,
    },
    '& .MuiSvgIcon-root': {
      width: 20,
      height: 20,
    },
  }),
  EDIT: (theme) => ({
    color: theme.basicButtons.colorEdit,
    padding: '5px',
    '&:hover': {
      color: theme.basicButtons.colorEditHover,
    },
    '& .MuiSvgIcon-root': {
      width: 20,
      height: 20,
    },
  }),
  LOGIN_USER: (theme) => ({
    color: theme.basicButtons.colorPlay,
    padding: '5px',
    '&:hover': {
      color: theme.basicButtons.colorPlayHover,
    },
    '& .MuiSvgIcon-root': {
      width: 24,
      height: 24,
    },
  }),
  LOGOUT: (theme) => ({
    color: theme.basicButtons.colorPlay,
    padding: '5px',
    '&:hover': {
      color: theme.basicButtons.colorPlayHover,
    },
    '& .MuiSvgIcon-root': {
      width: 24,
      height: 24,
    },
  }),
}
