import React, { useState, useEffect } from 'react';

import { Direction } from './constants';
import './styles.css';

const Resizer = ({ onResize }) => {
  const [direction, setDirection] = useState('');
  const [mouseDown, setMouseDown] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!direction) return;

      const ratio = window.devicePixelRatio

      onResize(direction, e.movementX / ratio, e.movementY / ratio);
    };

    if (mouseDown) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseDown, direction, onResize]);

  useEffect(() => {
    const handleMouseUp = () => setMouseDown(false);

    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const handleMouseDown = (direction) => () => {
    setDirection(direction);
    setMouseDown(true);
  };

  return (
    <>
      <div className="top-left" onMouseDown={handleMouseDown(Direction.TopLeft)}></div>

      <div className="top" onMouseDown={handleMouseDown(Direction.Top)}></div>

      <div className="top-right" onMouseDown={handleMouseDown(Direction.TopRight)}></div>
      
      <div className="right" onMouseDown={handleMouseDown(Direction.Right)}></div>

      <div className="right-bottom" onMouseDown={handleMouseDown(Direction.BottomRight)}></div>

      <div className="bottom" onMouseDown={handleMouseDown(Direction.Bottom)}></div>

      <div className="bottom-left" onMouseDown={handleMouseDown(Direction.BottomLeft)}></div>

      <div className="left" onMouseDown={handleMouseDown(Direction.Left)}></div>
    </>
  );
};

export default Resizer;



