import React from 'react';

import styles from './index.module.css';

import Landing from './Landing';

export default ({ shrink }) => {
  return (
    <div className={`${styles.main} ${shrink ? styles.mainShrink : styles.mainExpand}`}>
      <Landing />
    </div>
  );
};
