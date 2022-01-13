import React, { ReactNode } from 'react';

const ContentSection = (props: any) => {
  const { style } = props;
  return <div style={style}>{props.children}</div>;
};

export default ContentSection;
