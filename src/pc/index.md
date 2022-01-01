---
group:
  title: 组件
  group: /components
  order: 2
---

## pc

功能： pc 包裹样式

### Demo: mac

长宽默认是 600 400 你也可以定义

```tsx
import React, { useState } from 'react';
import { PC } from 'mouse-ui';
export default () => {
  return (
    <PC height={400} width={600}>
      <div style={{ padding: '10px' }}>预览内容</div>
    </PC>
  );
};
```
