---
group:
  title: 组件
  group: /components
  order: 2
---

## 倒计时

### 简单用法:

```tsx
import React, { useState } from 'react';
import { TimerCountDown } from 'mouse-ui';
import style from './index.less';

export default () => {
  const onTimeUp = () => {
    console.log('时间到');
  };
  return (
    <TimerCountDown
      format={{ hours: '小时', minutes: '分', seconds: '' }}
      seconds={10}
      onTimeUp={onTimeUp}
    />
  );
};
```

### 显示天数:

```tsx
import React, { useState } from 'react';
import { TimerCountDown } from 'mouse-ui';
import style from './index.less';

export default () => {
  const onTimeUp = () => {
    console.log('时间到');
  };
  return (
    <TimerCountDown
      isShowDay={true}
      format={{ hours: '小时', minutes: '分', seconds: '' }}
      seconds={10}
      onTimeUp={onTimeUp}
    />
  );
};
```

### 参数

| 参数          | 说明           | 类型    | 可选值 | 默认值                                            |
| ------------- | -------------- | ------- | ------ | ------------------------------------------------- |
| isShowDay     | 是否显示天数   | Boolean | -      | false                                             |
| isShowHour    | 是否显示小时   | Boolean | -      | true                                              |
| isShowMinutes | 是否显示分钟   | Boolean | -      | true                                              |
| format        | 格式化分割符号 | Object  | -      | day: '天',hours: '时',minutes: '分',seconds: '秒' |
| day           | 天数           | Number  | -      | 0                                                 |
| hours         | 小时           | Number  | -      | 0                                                 |
| minutes       | 分钟           | Number  | -      | 0                                                 |
| seconds       | 秒             | Number  | -      | 0                                                 |

### 事件

| 事件名称 | 说明 | 返回参数 |
| onTimeUp | 倒计时时间到，执行的回调函数 | - |
