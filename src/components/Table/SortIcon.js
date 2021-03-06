import React from 'react';
import classNames from 'classnames';

import Icon from '../Icon';
import stylesheet from './SortIcon.scss';

export default function SortIcon({ icon, className, preview = false }) {
  return (
    <span
      className={classNames(className, stylesheet.sortIcon, {
        sortPreview: preview,
      })}
    >
      <Icon icon={icon} />
    </span>
  );
}
