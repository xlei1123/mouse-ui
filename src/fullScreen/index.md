## fullScreen

Demo:

```tsx
import React, { useState } from 'react';
import { FullScreen } from 'reactUI';
import style from './index.less';
export default () => {
  return (
    <div
      style={{ backgroundColor: '#fff', position: 'relative', height: '100px' }}
    >
      klfajklsjflkajfsdjkfljlsakjfas
      <div style={{ position: 'absolute', right: '10px', bottom: '10px' }}>
        <FullScreen />
      </div>
    </div>
  );
};
```

不支持服务端渲染！！！
