## react-color

功能： 颜色选择器

### Demo: Sketch

```tsx
import React, { useState } from 'react';
import { ReactColor } from 'reactUI';
export default () => {
  const [color, setColor] = useState();
  const onChangeComplete = (color) => {
    setColor(color);
  };
  return (
    <ReactColor.SketchPicker
      color={color}
      onChangeComplete={onChangeComplete}
    />
  );
};
```

### Demo: Block

```tsx
import React from 'react';
import { ReactColor } from 'reactUI';
export default () => {
  return <ReactColor.BlockPicker />;
};
```

### Demo: Circle

```tsx
import React from 'react';
import { ReactColor } from 'reactUI';
export default () => {
  return <ReactColor.CirclePicker />;
};
```

### Demo: Compact

```tsx
import React from 'react';
import { ReactColor } from 'reactUI';
export default () => {
  return <ReactColor.CompactPicker />;
};
```

### Demo: Photoshop

```tsx
import React from 'react';
import { ReactColor } from 'reactUI';
export default () => {
  return <ReactColor.PhotoshopPicker />;
};
```
