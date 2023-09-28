import React, { useState } from 'react';

const FavoriteRangeBox = ({ onSearch }) => {
  const [propertyType, setPropertyType] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const handleSearch = () => {
    // Call the onSearch callback with the selected propertyType and priceRange
    onSearch(propertyType, priceRange);
  };

  return (
    <div className="search-box">
      <h2>Søg efter dit drømmehus</h2>
        <div className='inputsDesign'>
            <div className="input-container">
                <label htmlFor="propertyType">Ejendomstype:</label>
                <select
                id="propertyType"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                >
                <option value="">Ejendomstype</option>
                <option value="House">House</option>
                <option value="Apartment">Apartment</option>
                <option value="Condo">Condo</option>
                {/* Add more property types as needed */}
                </select>
            </div>


            <div className="input-container">
                <label htmlFor="priceRange">Pris-interval:</label>
                <input
                type="range"
                id="priceRange"
                min="0"
                max="12000000"
                step="1000"
                value={priceRange}
                onChange={(e) => setPriceRange(parseInt(e.target.value))}
                />
                <span>{priceRange} kr</span>
            </div>

        </div>
      
      <button onClick={handleSearch} className='rangeBoxButton'>Search</button>
    </div>
  );
};

export default FavoriteRangeBox;
