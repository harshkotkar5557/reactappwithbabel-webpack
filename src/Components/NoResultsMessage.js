import React from 'react';

const NoResultsMessage = ({ searchInputText }) => {
  return (
    <div className='no-result-found'>
      No results found for "{searchInputText}"
    </div>
  );
};

export default NoResultsMessage;
