import React from 'react';
export const emphasizeSubstring = (inputText, targetSubstring) => {
    const textSegments = inputText.split(new RegExp(`(${targetSubstring})`, 'gi'));
    return (
      <span>
        {textSegments.map((segment, index) => (
          <span
            key={index}
            style={
              segment.toLowerCase() === targetSubstring.toLowerCase()
                ? { color: 'blue' }
                : {}
            }
          >
            {segment}
          </span>
        ))}
      </span>
    );
  };
  
  export const checkInclusion = (sourceText, searchTerm) => {
    return sourceText.includes(searchTerm)
      ? `◾ ${searchTerm} is present within the text`
      : '';
  };
  