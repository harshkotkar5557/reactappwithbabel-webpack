import React, { useRef, useEffect, useState } from "react";
import useFetch from "../Utils/useFetch";
import useSearchText from "../Utils/useSearchText";
import { useKeyboardNavigation } from "../Utils/useKeyboardNavigation";
import { SearchBar } from "./SearchBar";
import SearchContainer from "./SearchContainer";
import NoResultsMessage from "./NoResultsMessage";

const Search = () => {
  const [userData, isLoading, fetchError] = useFetch(
    "https://fe-take-home-assignment.s3.us-east-2.amazonaws.com/Data.json"
  );
  const [searchInputText, setSearchInputText] = useState("");
  const searchRef = useRef([]);

  const searchResults = useSearchText(searchInputText, userData);

  const { currentIndex, handleArrowKeys, handleMouseEnter, handleMouseLeave, handleMouseMove } =
    useKeyboardNavigation(searchResults);

  useEffect(() => {
    if (currentIndex >= 0 && searchRef.current[currentIndex]) {
      searchRef.current[currentIndex].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [currentIndex]);

  return (
    <div className="search-wrapper">
      <SearchBar
        searchInputText={searchInputText}
        setSearchInputText={setSearchInputText}
        onKeyDown={handleArrowKeys}
      />
      <div className="search-results" tabIndex={0}>
        {isLoading && <div className="search-loading">Loading...</div>}
        {searchResults?.length && searchResults?.map((user, index) => (
          <SearchContainer
            className="search-item"
            key={user.id}
            ref={(el) => (searchRef.current[index] = el)}
            user={user}
            searchInputText={searchInputText}
            isActive={index === currentIndex}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
          />
        ))}
        {!searchResults?.length && searchInputText && (
          <NoResultsMessage searchInputText={searchInputText} />
        )}
      </div>
      {fetchError && <p className="search-error">{fetchError}</p>}
    </div>
  );
};

export default Search;
