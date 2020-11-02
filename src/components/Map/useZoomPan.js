import { useState } from 'react';

const useZoomPan = (nodeRef) => {
  const [currentPan, setCurrentPan] = useState({x: 0, y: 0});
  const [currentZoom, setCurrentZoom] = useState(1);

  const [prevPanMousePos, setPrevPanMousePos] = useState(null);
  const [isPanning, setIsPanning] = useState(false);

  // const getCoordinatesInNode = (eventX, eventY) => {
  //   if (nodeRef.current) {
  //     const rect = nodeRef.current.getBoundingClientRect();
  //     return {
  //       x: eventX - rect.left,
  //       y: eventY - rect.top
  //     };
  //   }
  //   return {x: 0, y: 0};
  // }

  const onPanStart = (event) => {
    setIsPanning(true);
    setPrevPanMousePos({ x: event.offsetX, y: event.offsetY });
  };

  const onPanMove = (event) => {
    const newPan = {
      x: currentPan.x - (event.offsetX - prevPanMousePos.x),
      y: currentPan.y - (event.offsetY - prevPanMousePos.y)
    };
    setCurrentPan(newPan);
    setPrevPanMousePos({ x: event.offsetX, y: event.offsetY });
    console.log('panning', event.offsetX, event.offsetY, prevPanMousePos, newPan);
    console.log(event.nativeEvent);
  }

  const onPanEnd = () => {
    setIsPanning(false);
    setPrevPanMousePos(null);
  }

  const onMouseDown = (event) => {
    event.preventDefault();
    onPanStart(event.nativeEvent);
  };

  const onMouseUp = (event) => {
    event.preventDefault();
    onPanEnd();
  }

  const onMouseMove = (event) => {
    event.preventDefault();
    if (isPanning) {
      onPanMove(event.nativeEvent);
    }
  }

  return {
    events: {
      onMouseDown,
      onMouseUp,
      onMouseMove
    },
    pan: currentPan
  };
};

export default useZoomPan;
