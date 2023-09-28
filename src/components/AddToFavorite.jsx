import React from 'react';

const AddToFavorite = ({ onAddToFavorites, onClose }) => {
  return (
    <div className="popup">
      <button onClick={onClose}>Close</button>
      <button onClick={onAddToFavorites}>Add to Favorites</button>
    </div>
  );
};

export default AddToFavorite;