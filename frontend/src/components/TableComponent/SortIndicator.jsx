import React from 'react';
import clsx from 'clsx';

import { SortingDirection } from './constants';

export const SortIndicator = ({ sortDirection }) => {
  const classNames = clsx('ReactVirtualized__Table__sortableHeaderIcon', {
    'ReactVirtualized__Table__sortableHeaderIcon--ASC':
      sortDirection === SortingDirection.ASC,
    'ReactVirtualized__Table__sortableHeaderIcon--DESC':
      sortDirection === SortingDirection.DESC
  });

  return (
    <svg className={classNames} width={18} height={18} viewBox="0 0 24 24">
      {sortDirection === SortingDirection.ASC
        ? <path d="M7 14l5-5 5 5z" />
        : <path d="M7 10l5 5 5-5z" />}
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );
}
