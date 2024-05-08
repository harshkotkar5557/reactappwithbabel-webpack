import { useState, useEffect } from 'react';

const useSearchText = (searchInputText, data) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const filteredSearchResults = data?.filter((item) =>
      Object.values(item).some((val) =>
        val.toString().toLowerCase().includes(searchInputText.toLowerCase())
      )
    );
    setResults(filteredSearchResults);
  }, [searchInputText, data]);

  return results;
};

export default useSearchText;
