import React from 'react';
import usePortal from 'react-useportal';

import Panel from './Panel';

const PanelPortal = (props) => {
  const { Portal } = usePortal({
    bindTo: document.getElementById('panel-portal'),
  });

  return (
    <Portal>
      <Panel {...props} />
    </Portal>
  )
};

export default PanelPortal;



