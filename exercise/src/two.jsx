// ReusableDiv.js
import React from 'react';

const ReusableDiv = ({ children, className, style }) => {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

export default ReusableDiv;
