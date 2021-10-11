import React, { ReactNode } from 'react';
import styles from './index.less';

interface Iprops {
  children: ReactNode;
}
const index = (props: Iprops) => {
  return (
    <div className={styles.previewBox}>
      <div className={styles.top}>
        <span className={styles.tab}>✖️</span>
        <span className={styles.add}>+</span>
      </div>
      <div className={styles.search}>
        <span>&gt-</span>
        <div className={styles.addr} />
      </div>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

export default index;
