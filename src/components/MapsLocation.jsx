import React from 'react';

const MapsLocation = ({ locationURL, onClose }) => {
  return (
    <div className="popup">
      <button onClick={onClose}>Close</button>
      {/* Display maps and location here */}
    </div>
  );
};

export default MapsLocation;