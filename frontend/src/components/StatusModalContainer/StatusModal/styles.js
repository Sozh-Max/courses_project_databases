export const styles = {
  container: (theme) => ({
    marginBottom: '10px',
    color: theme.basic.colorText,
    width: 200,
    borderRadius: 3,
    padding: '12px 20px',
    backgroundColor: 'gray',
    fontSize: 12,
    opacity: 0.8,
    '&:last-child': {
      marginBottom: 0,
    },
    '&.error_message': (theme) => ({
      backgroundColor: theme.basicButtons.colorDeleteHover,
      '&:focus': {
        backgroundColor: theme.basicButtons.colorDelete,
      },
    }),
    '&.success_message': (theme) => ({
      backgroundColor: theme.basicButtons.colorPlay,
      '&:focus': {
        backgroundColor: theme.basicButtons.colorPlayHover,
      },
    }),
  }),
};
