import React from 'react';

export const SearchBar = ({ searchInputText, setSearchInputText, onKeyDown }) => (
  <input
    className='search-bar'
    type='text'
    placeholder='Search here'
    value={searchInputText}
    onChange={(e) => setSearchInputText(e.target.value)}
    onKeyDown={onKeyDown}
  />
);
