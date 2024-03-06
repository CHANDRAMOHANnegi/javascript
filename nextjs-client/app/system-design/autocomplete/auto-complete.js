import React, { useState, useEffect } from "react";
import "./module.style.scss";

const Autocomplete = () => {
  const [inputValue, setInputValue] = useState("");
  const [cachedResults, setCachedResults] = useState({});
  const [showSuggestions, setShowSuggestions] = useState(false); // State to control visibility of suggestions
  const [retryCount, setRetryCount] = useState(0); // State to track retry attempts

  useEffect(() => {
    const fetchSearchResults = (query) => {
      const base_url = "http://localhost:3000/api/search";

      fetch(`${base_url}?query=${query}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch search results");
          }
          return response.json();
        })
        .then((results) => {
          setCachedResults((prevCache) => ({ ...prevCache, [query]: results }));
          setShowSuggestions(true); // Show suggestions after fetching results
          setRetryCount(0); // Reset retry count on success
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
          if (retryCount < 3) {
            // Retry up to 3 times
            setTimeout(() => {
              setRetryCount(retryCount + 1); // Increment retry count
              fetchSearchResults(query); // Retry fetching results
            }, 1000 * retryCount); // Increase delay exponentially
          } else {
            // If retry limit reached, display error message
            console.error(
              "Retry limit reached. Unable to fetch search results."
            );
          }
        });
    };

    // Debounce function to delay API calls
    const debounce = (func, delay) => {
      let timer;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          func(...args);
        }, delay);
      };
    };

    // Debounce the input change handler
    const debouncedInputChange = debounce((value) => {
      if (value.trim() !== "" && cachedResults[value] === undefined) {
        fetchSearchResults(value);
      }
    }, 500);

    // Call the debounced input change handler
    debouncedInputChange(inputValue);
  }, [inputValue, retryCount]); // Add retryCount to dependencies array

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setShowSuggestions(false); // Close suggestions list when a suggestion is selected
  };

  const suggestions = cachedResults[inputValue] || [];

  return (
    <div className="autocomplete-container">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type here..."
      />
      {showSuggestions && suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
