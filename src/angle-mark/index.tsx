import React, { ReactNode, useContext, useRef, useState } from 'react';
import style from './index.less';
export enum POSITION {
  'leftTop',
  'leftBottom',
  'rightTop',
  'rightBottom',
  'center',
}
interface Iprops {
  angleOptions: {
    position?: POSITION;
    imgsrc: string;
    size: number;
    clip: boolean;
  };
  children: ReactNode;
}
const index = (props: Iprops) => {
  const { angleOptions } = props;
  return (
    <div className={style.angleMarkWrapper}>
      {props.children}
      <img
        src={angleOptions.imgsrc}
        style={{ width: angleOptions.size, height: angleOptions.size }}
      />
    </div>
  );
};

export default index;
