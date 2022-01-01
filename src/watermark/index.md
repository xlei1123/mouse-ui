---
group:
  title: 组件
  group: /components
  order: 2
---

## 水印

功能： 背景添加水印

### Demo

```tsx
import React, { useState, useEffect } from 'react';
import { WaterMark } from 'react-ui';
export default () => {
  return (
    <WaterMark mark={'react-ui'}>
      <div style={{ height: '300px' }}>这里会有水印</div>
      <input />
      <div style={{ height: '200px' }}>这里会有水印</div>
    </WaterMark>
  );
};
```
