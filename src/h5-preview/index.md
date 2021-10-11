---
group:
  title: 组件
  group: /components
  order: 2
---

## h5 预览

功能： 在 pc 端显示一个 H5 容器

### Demo: 直接插入元素

```tsx
import React, { useState } from 'react';
import { H5Preview } from 'react-ui';
export default () => {
  return (
    <H5Preview>
      <div style={{ padding: '10px' }}>预览内容</div>
    </H5Preview>
  );
};
```

### Demo: 引入一个 iframe

```tsx
import React, { useState } from 'react';
import { H5Preview } from 'react-ui';
export default () => {
  return (
    <H5Preview>
      <iframe src="https://h5.aisee.qq.com/index" />
    </H5Preview>
  );
};
```
