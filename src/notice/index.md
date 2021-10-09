## notice

功能：通知公告滚动栏

### Demo: 单条消息

```tsx
import React, { useState } from 'react';
import { Notice } from 'reactUI';
import style from './index.less';
const contents = '暂无权限查看该页面，试试重刷新一次';
export default () => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <Notice contents={contents} time={36}></Notice>
    </div>
  );
};
```

### Demo: 单条消息 上下

```tsx
import React, { useState } from 'react';
import { Notice } from 'reactUI';
import style from './index.less';
const contents = '暂无权限查看该页面，试试重刷新一次';
export default () => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <Notice contents={contents} movePosition={'vertical'} time={3}></Notice>
    </div>
  );
};
```

### Demo: 多条消息

```tsx
import React, { useState } from 'react';
import { Notice } from 'reactUI';
import style from './index.less';
const contents = [
  '暂无权限查看该页面,试试重刷新一次',
  '暂无权限查看该页面,试试重刷新二次',
];
export default () => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <Notice contents={contents} time={46}></Notice>
    </div>
  );
};
```

### Demo: 多条消息 上下

```tsx
import React, { useState } from 'react';
import { Notice } from 'reactUI';
import style from './index.less';
const contents = [
  '暂无权限查看该页面,试试重刷新一次',
  '暂无权限查看该页面,试试重刷新二次',
  '暂无权限查看该页面,试试重刷新san次',
  '暂无权限查看该页面,试试重刷新四次',
];
export default () => {
  return (
    <div style={{ overflow: 'hidden', height: '20px' }}>
      <Notice contents={contents} movePosition={'vertical'} time={6}></Notice>
    </div>
  );
};
```

### Demo: 自定义消息样式

```tsx
import React, { useState } from 'react';
import { Notice } from 'reactUI';
import style from './index.less';
const contents = (
  <span>
    <b style={{ color: 'red' }}>公告：</b> 暂无权限查看该页面
  </span>
);
export default () => {
  return (
    <div style={{ overflow: 'hidden', width: '200px', position: 'relative' }}>
      <Notice contents={contents} time={6}></Notice>
    </div>
  );
};
```
