import React, { ReactNode, useRef } from 'react';
import style from './index.less';

enum movePosition {
  horizontal = 'horizontal',
  vertical = 'vertical',
}
enum moveMode {
  beat = 'beat',
  roll = 'roll',
}
interface Iprops {
  contents: string | Array<ReactNode>;
  movePosition?: movePosition;
  mode: moveMode;
  time: number;
}

const index = (props: Iprops) => {
  return (
    <div className={style.noticeWrapper}>
      <div
        className={`
        ${style.moveBox}
        ${
          props.movePosition === 'vertical'
            ? style.verticalRunBox
            : style.horizontalRunBox
        }`}
        style={{ animationDuration: props.time + 's' }}
      >
        {Array.isArray(props.contents)
          ? props.contents.map((content, index) => {
              return (
                <span style={{ marginRight: '20px' }} key={index}>
                  {content}
                </span>
              );
            })
          : props.contents}
      </div>
    </div>
  );
};

export default index;
