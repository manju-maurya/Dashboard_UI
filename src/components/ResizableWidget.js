// src/components/ResizableWidget.js
import React from 'react';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

const ResizableWidget = () => {
  return (
    <ResizableBox
      width={200}
      height={200}
      minConstraints={[100, 100]}
      maxConstraints={[500, 500]}
      style={{
        border: '1px solid black',
        backgroundColor: '#f0f0f0',
        padding: '10px',
        boxSizing: 'border-box'
      }}
      resizeHandles={['s', 'w', 'e', 'n', 'sw', 'nw', 'se', 'ne']}
    >
      <div style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        Resizable Widget
      </div>
    </ResizableBox>
  );
};

export default ResizableWidget;

