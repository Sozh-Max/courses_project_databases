import React from 'react';

import { Paper, TableCell } from '@mui/material';
import { AutoSizer, Column, Table } from 'react-virtualized';

import { SortIndicator } from './SortIndicator';

import { styles } from './styles';
import { HandlerAdapter } from './HandlerAdapter';

export const MuiVirtualizedTable = ({
  columns,
  rowHeight = 56,
  headerHeight = 50,
  sort,
  sortBy,
  sortDirection,
  ...tableProps
}) => {
  const cellRenderer = ({
    cellData,
    columnIndex,
    dataKey,
    handlerCellName = false,
    isCellCSS = {},
    rowData,
  }) => (
    <TableCell
      variant='body'
      style={{
        height: rowHeight,
        ...isCellCSS,
      }}
      sx={styles.tableCell}
      align={
        (columnIndex != null && columns[columnIndex].numeric) || false ? 'right' : 'left'
      }
    >
      {handlerCellName
        ? HandlerAdapter(handlerCellName, {
            ...tableProps,
            handlerData: cellData,
          })
        : cellData
      }
    </TableCell>
  );

  const headerRenderer = ({
    label,
    columnIndex,
    sortBy,
    dataKey,
    sortDirection,
    isHeaderCellCSS,
  }) => {
    return (
      <TableCell
        component='div'
        sx={styles.tableHeaderCell}
        variant='head'
        style={{
          height: headerHeight,
          ...isHeaderCellCSS,
        }}
        align={columns[columnIndex].numeric || false ? 'right' : 'left'}
      >
        <span>{label}</span>
        {sortBy === dataKey && <SortIndicator sortDirection={sortDirection} />}
      </TableCell>
    );
  };

  return (
    <AutoSizer>
      {({ height, width }) => (
        <Table
          height={height}
          width={width}
          rowHeight={rowHeight}
          gridStyle={{
            direction: 'inherit',
          }}
          headerHeight={headerHeight}
          sx={styles.table}
          sort={sort}
          sortBy={sortBy}
          sortDirection={sortDirection}
          {...tableProps}
          rowClassName={'body_row'}
        >
          {columns.map((
            {
              dataKey,
              handlerCellName,
              isCellCSS,
              isHeaderCellCSS,
              ...props
            },
            index
          ) => {

            return (
              <Column
                key={dataKey}
                headerRenderer={(headerProps) =>
                  headerRenderer({
                    ...headerProps,
                    isHeaderCellCSS,
                    columnIndex: index,
                  })
                }
                sx={styles.flexContainer}
                cellRenderer={(props) =>
                  cellRenderer({
                    handlerCellName,
                    isCellCSS,
                    ...props,
                  })
                }
                dataKey={dataKey}
                {...props}
              />
            );
          })}
        </Table>
      )}
    </AutoSizer>
  );
}

export const TableComponent = ({
  columns,
  rows,
  ...props
}) => {

  return (
    <Paper sx={styles.paper}>
      <MuiVirtualizedTable
        rowCount={rows.length}
        rowGetter={({ index }) => rows[index]}
        columns={columns}
        { ...props }
      />
    </Paper>
  );
}
