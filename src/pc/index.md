---
group:
  title: 组件
  group: /components
  order: 2
---

## pc

功能： pc 包裹样式

### Demo: mac

```tsx
import React, { useState } from 'react';
import { PC } from 'react-ui';
export default () => {
  return (
    <PC>
      <div style={{ padding: '10px' }}>预览内容</div>
    </PC>
  );
};
```

### Demo: windows

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

### Demo: 依据访问的设备适配

### Demo: 不包含键盘
