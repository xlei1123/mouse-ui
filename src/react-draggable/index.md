## react-darggable

功能： 拖拽

### Demo: 自由拖拽

```tsx
import React, { useState } from 'react';
import { ReactDraggable } from 'reactUI';
export default () => {
  return (
    <ReactDraggable>
      <div
        style={{ backgroundColor: 'red', width: '200px', cursor: 'pointer' }}
      >
        <div>Drag from here</div>
        <div>This readme is really dragging on...</div>
      </div>
    </ReactDraggable>
  );
};
```

### Demo: 指定位置拖拽
