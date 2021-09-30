export enum POSITION {
  'leftTop' = 'leftTop',
  'leftBottom' = 'leftBottom',
  'rightTop' = 'rightTop',
  'rightBottom' = 'rightBottom',
  'center' = 'center',
}

export const positionInlineStyle = {
  leftTop: {
    left: 0,
    top: 0,
  },
  leftBottom: {
    left: 0,
    bottom: 0,
  },
  rightTop: {
    right: 0,
    top: 0,
  },
  rightBottom: {
    right: 0,
    bottom: 0,
  },
  center: {
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
};
