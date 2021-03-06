import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

import styles from './index.module.css';

import List from './List';

export default ({ shrink, handleHover }) => {
  return (
    <div
      className={`${styles.sidebar} ${shrink && styles.sidebarExpand}`}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <div className={`${styles.sidebarIcon} ${shrink && styles.iconHide}`}>
        <AiOutlineMenu size={25} />
      </div>
      {shrink ? <List /> : null}
    </div>
  );
};
