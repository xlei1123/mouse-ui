import React, { ReactNode } from 'react';
import styles from './index.less';

interface Iprops {
  children: ReactNode;
  height: Number;
  width: Number;
}
const index = (props: Iprops) => {
  const { height = 400, width = 600 } = props;
  return (
    <div style={{ height: `${height}px`, width: `${width}px` }}>
      <div className={styles.previewBox}>
        <div className={styles.content}>{props.children}</div>
      </div>
      <div className={styles.footer}>
        <span
          style={{
            display: 'inline-block',
            height: '50px',
            width: '80px',
            backgroundColor: '#000',
            marginBottom: '-10px',
          }}
        ></span>
        <br style={{ height: 0 }} />
        <span
          style={{
            display: 'inline-block',
            height: '20px',
            width: '200px',
            backgroundColor: '#000',
          }}
        ></span>
      </div>
    </div>
  );
};

export default index;
