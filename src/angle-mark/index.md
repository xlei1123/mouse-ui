---
group:
  title: Components
  group: /components
  order: 2
---

## angle-mark

功能： 角标 左上，左下 右下，右上，中，自定义

### Demo:

```tsx
import React, { useState } from 'react';
import { AngleMark } from 'react-ui';
import style from './index.less';
const angleOptions = {
  position: 'rightTop', // 'leftTop', 'leftBottom', 'rightTop', 'rightBottom', 'center'
  imgsrc: 'https://avatars.githubusercontent.com/u/17528531?v=4',
  size: 100,
};
export default () => {
  return (
    <AngleMark angleOptions={angleOptions}>
      <div style={{ width: '200px', height: '200px' }}>lkfjslkjflksaj</div>
    </AngleMark>
  );
};
```
