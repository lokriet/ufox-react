import { useEffect, useCallback, useReducer, useState } from 'react';

const clamp = (min, value, max) => Math.min(max, Math.max(min, value));
const debug = true;
const log = params => {
  if (!debug) return;
  console.log(params);
}

const initialState = {
  currentPan: {x: 0, y: 0},
  maxPan: {x: 0, y: 0},
  prevPanMousePos: {x: 0, y: 0},
  isPanning: false,

  currentZoom: 1,
  minZoom: 1,
  maxZoom: 10,

  initialized: false,
  containerSize: {width: 0, height: 0},
  imageSize: {width: 0, height: 0}
};

const deltaPan = (state, action) => {
  if (!state.initialized) return state;

  const newPan = {
    x: clamp(0, state.currentPan.x + action.delta.x, state.maxPan.x),
    y: clamp(0, state.currentPan.y + action.delta.y, state.maxPan.y)
  };
  return {
    ...state,
    currentPan: newPan,
    prevPanMousePos: action.coords || state.prevPanMousePos
  }
};

const zoom = (state, action) => {
  if (!state.initialized) return state;

  const newZoom = clamp(state.minZoom, state.currentZoom - action.deltaZoom, state.maxZoom);
  const newMaxPan = {
    x: Math.max(0, state.imageSize.width * newZoom - state.containerSize.width),
    y: Math.max(0, state.imageSize.height * newZoom - state.containerSize.height)
  };
  const newCurrentPan = {
    x: Math.min(newMaxPan.x, state.currentPan.x),
    y: Math.min(newMaxPan.y, state.currentPan.y)
  };

  return {
    ...state,
    currentZoom: newZoom,
    currentPan: newCurrentPan,
    maxPan: newMaxPan,
  }
};

const init = (state, action) => {
  const newMaxPan = {
    x: Math.max(0, action.imageSize.width - action.containerSize.width),
    y: Math.max(0, action.imageSize.height - action.containerSize.height)
  };
  const newMinZoom = Math.min(
    1,
    action.containerSize.width / action.imageSize.width,
    action.containerSize.height / action.imageSize.height
  );
  return {
    ...state,
    maxPan: newMaxPan,
    minZoom: newMinZoom,
    imageSize: action.imageSize,
    containerSize: action.containerSize,
    initialized: true
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'init':
      return init(state, action);

    case 'panStart':
      log('pan start' );
      if (!state.initialized) return state;
      return {
        ...state,
        isPanning: true,
        prevPanMousePos: action.coords
      }
    case 'panStop':
      log('pan stop');
      if (!state.initialized) return state;
      return {
        ...state,
        isPanning: false,
        prevPanMousePos: {x: 0, y: 0}
      }
    case 'pan':
      log('pan');
      return deltaPan(state, {
        delta: {
          x: state.prevPanMousePos.x - action.coords.x,
          y: state.prevPanMousePos.y - action.coords.y
        }
      });

    case 'zoom':
      return zoom(state, action);
    case 'deltaPan': {
      return deltaPan(state, action);
    }

    default:
      return state;
  }
}

const useZoomPan = (containerRef, imageSize) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [currentMouseDown, setCurrentMouseDown] = useState(null);
  const [currentMouseUp, setCurrentMouseUp] = useState(null);
  const [currentMouseMove, setCurrentMouseMove] = useState(null);
  // const containerRef = useRef();

  useEffect(
    () => {
      // set initial sizes
      if (containerRef.current && imageSize && !state.initialized) {
        dispatch({
          type: 'init',
          containerSize: {
            width: containerRef.current.getBoundingClientRect().width,
            height: containerRef.current.getBoundingClientRect().height
          },
          imageSize
        });
      }
    }, [imageSize, containerRef, state.initialized]
  );

  // events
  const onMouseDown = useCallback(
    (event) => {
      event.preventDefault();
      log('pan start???');
      dispatch({
        type: 'panStart',
        coords: { x: event.offsetX, y: event.offsetY }
      });
    },
    [dispatch]
  );

  const onMouseUp = useCallback(
    (event) => {
      event.preventDefault();
      log('pan stop???');
      dispatch({ type: 'panStop'});
    },
    [dispatch]
  );

  const onMouseMove = useCallback(
    (event) => {
      event.preventDefault();
      if (state.isPanning) {
        dispatch({
          type: 'pan',
          coords: { x: event.offsetX, y: event.offsetY }
        })
      }
    },
    [state.isPanning, dispatch]
  );

  const onWheel = useCallback(
    (event) => {
      event.preventDefault();
      if (event.ctrlKey) {
        dispatch({type: 'zoom', deltaZoom: event.deltaY * 0.01});
      } else {
        dispatch({
          type: 'deltaPan',
          delta: {
            x: event.deltaX,
            y: event.deltaY
          }
        })
      }
    },
    [dispatch],
  );

  useEffect(() => {
    containerRef.current.addEventListener('mousewheel', onWheel, {
      passive: false
    });
  }, [containerRef, onWheel]);

  useEffect(() => {
    // if (currentMouseMove) {
    //   containerRef.current.removeEventListener('mouseMove', currentMouseMove);
    // }
    containerRef.current.addEventListener('mousemove', onMouseMove, {
      passive: false
    });
    // setCurrentMouseMove(onMouseMove);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef, onMouseMove]);

  useEffect(() => {
    containerRef.current.addEventListener('mouseup', onMouseUp, {
      passive: false
    });
  }, [containerRef, onMouseUp]);

  useEffect(() => {
    containerRef.current.addEventListener('mousedown', onMouseDown, {
      passive: false
    });
  }, [containerRef, onMouseDown]);


  return {
    events: {
      // onMouseDown,
      onMouseUp,
      // onMouseMove,
    },
    pan: state.currentPan,
    zoom: state.currentZoom,
    // containerRef
  };
};

export default useZoomPan;
