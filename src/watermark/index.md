---
group:
  title: Components
  group: /components
  order: 2
---

## waterMark

功能： 水印

### Demo

```tsx
import React, { useState } from 'react';
import { WaterMark } from 'react-ui';
export default () => {
  return (
    <WaterMark mark={'react-ui'}>
      <div style={{ height: '300px' }}>这里会有水印</div>
    </WaterMark>
  );
};
```
