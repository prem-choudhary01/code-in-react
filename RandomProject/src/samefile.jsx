import React, { useState } from 'react';

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        Hello toggle is = 
        {isToggled ? 'ON' : 'OFF'}
      </button>
      {isToggled && <p>The toggle is ON</p>}
    </div>
  );
};

export default ToggleButton;
