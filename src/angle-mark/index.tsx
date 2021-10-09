import React, { ReactNode } from 'react';
import style from './index.less';
import { POSITION, positionInlineStyle } from './position';
interface Iprops {
  angleOptions: {
    position?: POSITION;
    imgsrc: string;
    size?: number;
  };
  children: ReactNode;
}

const index = (props: Iprops) => {
  const { angleOptions } = props;
  const position = angleOptions.position || 'center';
  return (
    <div className={style.angleMarkWrapper}>
      {props.children}
      <img
        src={angleOptions.imgsrc}
        style={{
          width: angleOptions.size,
          height: angleOptions.size,
          position: 'absolute',
          ...positionInlineStyle[position],
        }}
      />
    </div>
  );
};

export default index;
