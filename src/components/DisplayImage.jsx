import React from 'react';

const DisplayImage = ({ imageURL, onClose }) => {
  return (
    <div className="popup">
      <button onClick={onClose}>Close</button>
      <img src={imageURL} alt="Building" />
    </div>
  );
};

export default DisplayImage ;