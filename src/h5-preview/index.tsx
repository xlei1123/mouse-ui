import React, { ReactNode } from 'react';
import styles from './index.less';

interface Iprops {
  children: ReactNode;
}
const index = (props: Iprops) => {
  return (
    <div className={styles.previewBox}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

export default index;
