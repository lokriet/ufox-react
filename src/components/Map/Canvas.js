import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useZoomPan from './useZoomPan';

const Canvas = (props) => {
  const [image, setImage] = useState(null);
  const canvasRef = useRef();
  const divRef = useRef();
  const { events, pan } = useZoomPan();

  useEffect(() => {
    const imgUrl =
      'https://www.komar.de/en/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/4/-/4-050_worldmap_neu_ma_1.jpg';
    const img = new Image();
    img.src = imgUrl;
    img.onload = () => {
      setImage(img);
    };
  }, []);

  useEffect(() => {
    if (image) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      //Our draw come here
      // draw(context);
      context.drawImage(
        image,
        pan.x,
        pan.y,
        canvas.width,
        canvas.height,
        0,
        0,
        canvas.width,
        canvas.height
      );
    }
    console.log('new pan', pan.x, pan.y);
  }, [image, pan.x, pan.y]);

  return (
    <div ref={divRef} {...events} style={{ margin: '30px 50px' }}>
      <canvas ref={canvasRef} width={1000} height={800} />
    </div>
  );
};

Canvas.propTypes = {};

export default Canvas;