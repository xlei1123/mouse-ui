### waterMark

功能： 水印

### Demo

```tsx
import React, { useState } from 'react';
import { WaterMark } from 'reactUI';
export default () => {
  return (
    <WaterMark mark={'reactUI'}>
      <div style={{ height: '300px' }}>这里会有水印</div>
    </WaterMark>
  );
};
```
