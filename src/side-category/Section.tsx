import React, { ReactNode } from 'react';

interface Iprops {
  style: React.CSSProperties;
  children?: ReactNode;
  tabKey: string;
}
const Section = (props: Iprops) => {
  const { style, tabKey } = props;
  return (
    <div style={style} id={tabKey}>
      {props.children}
    </div>
  );
};

export default Section;
