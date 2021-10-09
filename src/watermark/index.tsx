import React, { ReactNode, useEffect, useRef } from 'react';
interface Iprops {
  children: ReactNode;
  mark: string;
}

function watermark(mark: string, layer?: HTMLDivElement | null) {
  if (!mark) return;
  try {
    //画一小块水印
    var canvas = document.createElement('canvas');
    canvas.width = 100;
    canvas.height = 100;
    var ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.globalAlpha = 0.1;
    ctx.rotate((-25 * Math.PI) / 180);
    ctx.translate(0, 50);
    ctx.font = '16px Arial';
    ctx.fillStyle = '#000';
    ctx.fillText(mark, 0, 0);
    var url = canvas.toDataURL();
    var css_text =
      'position:relative;background-image:url(' +
      url +
      ');pointer-events:none;z-index:9999;';

    function createLayer() {
      if (!layer) {
        layer = document.createElement('div');
        layer.id = 'watermark_layer';
        layer.setAttribute('style', css_text);
        css_text = layer.getAttribute('style') as string;
        document.body.appendChild(layer);
      }
      var style = layer.getAttribute('style');
      if (style != css_text) layer.setAttribute('style', css_text);
    }

    //轮训
    setInterval(function () {
      try {
        createLayer();
      } catch (error) {}
    }, 500);
  } catch (e) {}
}

export default (props: Iprops) => {
  const waterMarkRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    watermark(props.mark, waterMarkRef.current);
  }, [waterMarkRef]);
  return <div ref={waterMarkRef}>{props.children}</div>;
};
