import React, { useRef, useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import useZoomPan from './useZoomPan';

const Canvas = (props) => {
  const [image, setImage] = useState(null);
  const [imageSize, setImageSize] = useState(null);
  const canvasRef = useRef();
  const containerRef = useRef();
  const { pan, zoom } = useZoomPan(containerRef, imageSize);

  useEffect(() => {
    const imgUrl =
      'https://www.komar.de/en/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/4/-/4-050_worldmap_neu_ma_1.jpg';
    const img = new Image();
    img.src = imgUrl;
    img.onload = function() {
      // console.log('image loaded', img, this.width, this.height);
      setImage(img);
      setImageSize({width: this.width, height: this.height});
    };
  }, []);

  // useEffect(() => {
  //   window.addEventListener('mouseup', events.onMouseUp);
  //   return () => {
  //     window.removeEventListener('mouseup', events.onMouseUp);
  //   }
  // }, [events]);

  useEffect(() => {
    if (image && imageSize) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      context.save();
      context.scale(zoom, zoom);
      //Our draw come here
      // draw(context);
      context.drawImage(
        image,
        pan.x,
        pan.y,
        imageSize.width,
        imageSize.height,
        0,
        0,
        imageSize.width,
        imageSize.height
      );
      context.restore();
    }
    // console.log('new pan', pan.x, pan.y);
  }, [image, imageSize, pan.x, pan.y, zoom]);

  return (
    <div>
      <div ref={containerRef} style={{ margin: '30px 50px' }}>
        <canvas ref={canvasRef} width={1000} height={800} />
      </div>
    </div>
  );
};

Canvas.propTypes = {};

export default Canvas;
