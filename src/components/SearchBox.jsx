import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MoreButton from './MoreButton';

function SearchBox() {
  const [searchParams, setSearchParams] = useState({
    city: '',
    price: '',
    type: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams({
      ...searchParams,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { city, price, type } = searchParams;
    // Build the search query based on user input
    // const navigate = useNavigate();
    const searchQuery = `?city=${city}&price=${price}&type=${type}`;
    // Navigate to the search results page with the search query as parameters
    navigate(`/searchresultspage${searchQuery}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text" className='searchBox'
          // name="city"
          placeholder="Enter search query (e.g., city=Roskilde&price=&type=)"
          value={searchParams.city}
          onChange={handleInputChange}
        />
        {/* <input
          type="number"
          name="price"
          placeholder="Price"
          value={searchParams.price}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="type"
          placeholder="Type"
          value={searchParams.type}
          onChange={handleInputChange}
        /> */}
        <MoreButton title="Search" width={120} height={48} />
      </form>
    </div>
  );
}

export default SearchBox;



