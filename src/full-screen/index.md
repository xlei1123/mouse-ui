## full-screen

功能： 组件直接父级 切换全屏功能

1. 切换全屏的操作按钮的外层样式 通过 style 直接透传
2. Demo:

```tsx
import React, { useState } from 'react';
import { FullScreen } from 'reactUI';
import style from './index.less';
export default () => {
  return (
    <div
      style={{
        backgroundColor: '#fff',
        position: 'relative',
        minHeight: '100px',
      }}
    >
      klfajklsjflkajfsdjkfljlsakjfas
      <FullScreen
        style={{ position: 'absolute', right: '10px', bottom: '10px' }}
      />
    </div>
  );
};
```

不支持服务端渲染！！！
