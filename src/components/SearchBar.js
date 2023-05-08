import React, { useState } from "react";
import './searchBar.css'

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  const handleChange =(event)=>{
    setTerm(event.target.value)
  }


  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>What do you want to search?</label>
        <input value={term} onChange={handleChange} />
        <button className="search-bar__btn">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
