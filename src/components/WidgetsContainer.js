// src/components/WidgetsContainer.js
import React from 'react';
import ResizableWidget from './ResizableWidget';

const WidgetsContainer = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh' }}>
      <ResizableWidget title="Widget 1" />
      <ResizableWidget title="Widget 2" />
    </div>
  );
};

export default WidgetsContainer;

