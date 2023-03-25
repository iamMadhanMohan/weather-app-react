import React, { useState } from 'react'
import './SearchBar.css';

const SearchBar = (props) => {
  
  const [city, setCity] = useState('');

  function handleChange(event)
  {
    setCity(event.target.value)    
  }

  function handleSubmit(event)
  {
    event.preventDefault();
    props.setCityName(city);
    setCity('');
  }

  return (
    <form action="submit">
    <div className='SearchBar'>
      <input type="text" name="cityName" onChange={handleChange} value={city} placeholder='enter city name'/>
      <button className='button' onClick={handleSubmit}>Search</button>
    </div>
    </form>
  )
}

export default SearchBar