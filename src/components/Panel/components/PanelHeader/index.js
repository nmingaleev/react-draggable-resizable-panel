import React, { useState, useEffect } from 'react';

import '../../styles.css';

const PanelHeader = ({ onDrag }) => {
  const [mouseDown, setMouseDown] = useState(false);

  useEffect(() => {
    const handleMouseUp = () => setMouseDown(false);

    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  useEffect(() => {
    const ratio = window.devicePixelRatio

    const handleMouseMove = (e) => onDrag(e.movementX / ratio, e.movementY / ratio);

    if (mouseDown) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseDown, onDrag]);

  const handleMouseDown = () => setMouseDown(true);

  return (
    <div className="panel__header" onMouseDown={handleMouseDown}>
      header
    </div>
  );
}

export default PanelHeader;


