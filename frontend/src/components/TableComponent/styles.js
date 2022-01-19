export const styles = {
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
    flexGrow: 1,
  },

  tableHeaderCell: (theme) => ({
    color: theme.basic.colorText,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
    fontSize: 16,
    lineHeight: 1,
    fill: theme.basic.colorText,
    cursor: 'pointer',
    borderBottom: 'none',

    '& .ReactVirtualized__Table__sortableHeaderIcon': {
      marginLeft: 8,
    },

    '&.MuiTableCell-root': {
      padding: '10px 5px',
      lineHeight: 1.3,
      color: theme.basic.colorText,
    },
  }),

  tableCell: (theme) => ({
    color: theme.basic.colorText,
    borderBottom: 'none',
    padding: '8px 5px',
    display: 'flex',
    alignItems: 'center',
    height: '48px !important'
  }),

  table: {
    '& .ReactVirtualized__Table__headerRow': {
      flip: false,
      display: 'flex',
      alignItems: 'center',
      boxSizing: 'border-box',
    },
  },

  paper: (theme) => ({
    backgroundColor: theme.basic.mainBackgroundColor,
    flexGrow: 1,
    minHeight: 300,
    width: '100%',
    height: '100%',
    color: theme.basic.colorText,
    overflow: 'hidden',
    boxShadow: 'none',
    '& .ReactVirtualized__Grid .body_row': {
      width: '100% !important',
      display: 'flex',
      alignItems: 'center',
      boxSizing: 'border-box',
    },
    '& .ReactVirtualized__Table__rowColumn': {
      backgroundColor: theme.basic.tableRowBackgroundColor,
      height: '48px',
      '&:first-of-type': {
        borderRadius: '24px 0 0 24px',
      },
      '&:first-of-type .MuiTableCell-root': {
        paddingLeft: '25px',
      }
    },
    '& .ReactVirtualized__Table__headerRow': {
      display: 'flex',
    },
    '& .ReactVirtualized__Table__headerColumn': {
      '&:first-of-type .MuiTableCell-root': {
        paddingLeft: '25px',
      },
    },
    '& .ReactVirtualized__Grid.ReactVirtualized__Table__Grid': {
      '&::-webkit-scrollbar': {
        borderRadius: '3px',
        width: '6px',
        backgroundColor: theme.basic.panelBackgroundColor,
      },
      '&::-webkit-scrollbar-thumb': {
        borderRadius: '3px',
        backgroundColor: theme.basic.basicColor,
        cursor: 'pointer',
      },
      '&::-webkit-scrollbar-track': {
        borderRadius: '3px',
        backgroundColor: theme.basic.panelBackgroundColor,
      },
    },
  }),
}
